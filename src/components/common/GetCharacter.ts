import axios from 'axios';
import {
  CounterYn,
  IAccessory,
  ICrawCharacter,
  IGear,
  IGem,
  ISkillAdd,
  ITripod,
  SelectedYn,
} from '~/@types';
import _ from 'lodash';
import * as Sentry from '@sentry/react-native';

interface IGetCharacter {
  name: string;
}

const cheerio = require('react-native-cheerio');

export const getCharacter = async ({name}: IGetCharacter) => {
  const reg = /<[^>]*>?/g;
  return axios(`https://lostark.game.onstove.com/Profile/Character/${name}`, {
    method: 'get',
  })
    .then(response => {
      return response.data;
    })
    .then(html => {
      const $ = cheerio.load(html);

      let character: ICrawCharacter = {
        accessoryList: undefined,
        avatarList: undefined,
        cardList: undefined,
        elixir: undefined,
        ownUserName: undefined,
        skillList: [
          {
            name: '',
            class: '',
            imageUri: '',
            level: 0,
            counterYn: CounterYn.N,
            superArmor: '',
            weakPoint: 0,
            staggerValue: '',
            attackType: '',
            tripods: [
              {
                name: '',
                skillName: '',
                imageUri: '',
                level: 0,
                tier: 0,
                slot: 0,
                selected: SelectedYn.N,
              },
            ],
            rune: null,
          },
        ],
        userName: '',
        class: '',
        engraving: undefined,
        gearList: undefined,
        gemList: undefined,
        guildName: undefined,
        imageUri: '',
        itemLevel: 0,
        level: 0,
        serverName: '',
        stats: {
          basic: {
            attack_power: 0,
            max_health: 0,
          },
          battle: {
            critical: 0,
            domination: 0,
            endurance: 0,
            expertise: 0,
            specialization: 0,
            swiftness: 0,
          },
          engraving: undefined,
          virtues: {
            charisma: 0,
            courage: 0,
            kindness: 0,
            wisdom: 0,
          },
        },
        success: false,
        error: '',
      };

      const noCharacterCheck =
        $(
          '#lostark-wrapper > div > main > div > div.profile-ingame > div > span:nth-child(2)',
        )
          .text()
          .trim() || '';
      if (noCharacterCheck === '캐릭터명을 확인해주세요.') {
        character.error = '존재하지 않는 캐릭터입니다.';
        return character;
      }

      // 닉네임
      character.userName = $('.profile-character-info__name').text().trim();
      if (!character.userName) {
        character.error = '존재하지 않는 캐릭터입니다.';
        return character;
      }
      // 레벨
      character.level = $('.profile-character-info__lv')
        .text()
        .replace('Lv.', '');
      // 템렙
      $('.level-info2__item > span').each(function (index: number, item: any) {
        if (index === 1) {
          character.itemLevel = $(item).text().replace('Lv.', '');
        }
      });
      // 기본스탯
      character.stats.basic = basicStats($);
      // 전투스탯
      character.stats.battle = battleStats($);
      // 성향
      character.stats.virtues = virtues($);
      // 각인
      character.stats.engraving = engraving($);

      // 보유 캐릭터 목록
      let count = 0;
      let temp: any[] = [];
      $('ul.profile-character-list__char > li > span > button').each(function (
        index: any,
        item: any,
      ) {
        temp[count] = $(item).attr('onclick')?.split('/')[3].replace("'", '');
        count = count + 1;
      });
      character.ownUserName = temp;
      character.class = $(
        '#lostark-wrapper > div > main > div > div.profile-character-info > img[src]',
      ).attr().alt;
      character.guildName = $(
        '#lostark-wrapper > div > main > div > div.profile-ingame > div.profile-info > div.game-info > div.game-info__guild > span:nth-child(2)',
      ).text();
      character.serverName = $(
        '#lostark-wrapper > div > main > div > div.profile-character-info > span.profile-character-info__server',
      )
        .text()
        .replace('@', '');
      character.imageUri = $(
        '#profile-equipment > div.profile-equipment__character > img',
      ).attr().src;

      const script = $('#profile-ability > script')
        .html()
        .replace('$.Profile = ', '')
        .replace(/\t/gi, '')
        .replace(/\n/gi, '')
        .replace(/\\n/gi, '')
        .replace(/\\t/gi, '')
        .replace(/;/gi, '');

      let scriptJson: {
        Skill: {[s: string]: unknown} | ArrayLike<unknown>;
        Equip: {[s: string]: unknown} | ArrayLike<unknown>;
        GemSkillEffect: any[];
        Engrave: {[s: string]: unknown} | ArrayLike<unknown>;
      };
      try {
        scriptJson = JSON.parse(script);
      } catch (e) {
        character.error =
          '캐릭터의 정보가 충분하지 않습니다.\n다른 캐릭터를 검색해주세요.';
        return character;
      }
      if (!scriptJson) {
        character.error =
          '캐릭터의 정보가 충분하지 않습니다.\n다른 캐릭터를 검색해주세요.';
        return character;
      }
      const skillList = Object.entries(scriptJson.Skill).map(obj => {
        const data: string = JSON.stringify(obj[1]).replace(reg, '  ');

        const nameRegex = /"type":"NameTagBox","value":"([^"]+)"/;
        const imageUriRegex = /"iconPath":"(.*?)"/;
        const levelRegex = /"type":"SingleTextBox","value":"스킬 레벨 (\d+)/;
        const weakPointRegex = /부위 파괴 : 레벨 (\d+)/;
        const staggerValueRegex = /무력화 : (\S+)/;
        const attackTypeRegex = /공격 타입 : (\S+)/;
        const counterYnRegex = /카운터 : (\S+)/;
        const superArmorRegex = /슈퍼아머 : ([^"]+)/;

        const nameMatch = nameRegex.exec(data);
        const imageUriMatch = imageUriRegex.exec(data);
        const levelMatch = levelRegex.exec(data);
        const weakPointMatch = weakPointRegex.exec(data);
        const staggerValueMatch = staggerValueRegex.exec(data);
        const attackTypeMatch = attackTypeRegex.exec(data);
        const counterYnMatch = counterYnRegex.exec(data);
        const superArmorMatch = superArmorRegex.exec(data);

        return {
          name: nameMatch ? nameMatch[1].trim() : '',
          class: character.class,
          imageUri: imageUriMatch ? imageUriMatch[1].trim() : '',
          level: levelMatch ? parseInt(levelMatch[1].trim()) : 0,
          counterYn: counterYnMatch ? 'Y' : 'N',
          superArmor: superArmorMatch
            ? superArmorMatch[1].replace('카운터 : 가능', '').trim()
            : '',
          weakPoint: weakPointMatch ? parseInt(weakPointMatch[1].trim()) : 0,
          staggerValue: staggerValueMatch ? staggerValueMatch[1].trim() : '',
          attackType: attackTypeMatch ? attackTypeMatch[1].trim() : '',
          tripods: null,
          rune: null,
        };
      });

      const tripodList = $(
        '#profile-skill > div.profile-skill-battle > div.profile-skill__list > div',
      )
        .children()
        .toArray()
        .map((obj: any) => {
          const data: any = JSON.parse(
            JSON.stringify(obj.attribs)
              .replace('data-classno', 'data_classno')
              .replace('data-classname', 'data_classname')
              .replace('data-skill', 'data_skill')
              .replace(/<[^>]*>?/g, ''),
          );

          const skillData = JSON.parse(data.data_skill);
          const runeNameRegex = /"type":"NameTagBox","value":"([^"]+)"/;
          let rune;
          if (skillData.rune) {
            const runeNameMatch = runeNameRegex.exec(skillData.rune.tooltip);
            rune = {
              name: runeNameMatch ? runeNameMatch[1] : '',
              imageUri: skillData.rune.icon,
              grade: skillData.rune.grade,
            };
          }

          let tripods: ITripod[] = [];
          if (skillData.tripodList) {
            skillData.tripodList.map((x: any) => {
              tripods.push({
                name: x.name,
                imageUri: x.slotIcon,
                tier: x.level,
                slot: x.slot,
                level: x.featureLevel,
                skillName: skillData.name,
                selected:
                  skillData.selectedTripodTier[x.level] &&
                  skillData.selectedTripodTier[x.level] === x.slot
                    ? SelectedYn.Y
                    : SelectedYn.N,
              });
            });
          }

          const skillInfo: ISkillAdd = {
            name: skillData.name,
            class: character.class,
            tripods: tripods,
            rune: rune,
          };
          return skillInfo;
        });
      character.skillList = _.values(
        _.merge(_.keyBy(skillList, 'name'), _.keyBy(tripodList, 'name')),
      );

      const gemList: IGem[] = Object.entries(scriptJson.Equip)
        .filter(obj => obj[0].match('Gem'))
        .map((obj: any, index: number) => {
          const regex =
            /\[([^\]]+)\] ([^0-9]+) (재사용 대기시간|피해) ([0-9.]+)% (감소|증가)/g;
          const data: string = JSON.stringify(obj[1]).replace(reg, '');
          const gemInfo = regex.exec(data);

          const nameRegex = /"type":"NameTagBox","value":"([^"]+)"/;
          const levelRegex = /(\d+)레벨/;
          const imageUriRegex = /"iconPath":"(.*?)"/;

          const nameMatch = nameRegex.exec(data);
          const levelMatch = levelRegex.exec(data);
          const imageMatch = imageUriRegex.exec(data);

          const gem: IGem = {
            name: nameMatch ? nameMatch[1] : '',
            imageUri: imageMatch ? imageMatch[1] : '',
            slot: index,
            level: levelMatch ? parseInt(levelMatch[1]) : 0,
            tier: parseInt(
              // @ts-ignore
              JSON.stringify(obj[1].Element_001.value).match(
                /아이템 티어 (\d+)/,
              )[1],
            ),
            class: gemInfo ? gemInfo[1].trim() : '',
            skill: gemInfo ? gemInfo[2].trim() : '',
            effectType: gemInfo ? gemInfo[3].trim() : '',
            rate: gemInfo ? parseFloat(gemInfo[4]) : 0,
            direction: gemInfo ? gemInfo[5].trim() : '',
          };
          return gem;
        });

      if (gemList) {
        // @ts-ignore
        character.gemList = gemList.map(x => {
          const gem = scriptJson.GemSkillEffect.find(
            (y: {SkillName: string}) => y.SkillName === x.skill,
          );
          if (gem) {
            return {
              ...x,
              skillIcon: gem.SkillIcon,
            };
          }
        });
      }

      character.gearList = Object.entries(scriptJson.Equip)
        .filter(obj => !obj[0].match('Gem'))
        .filter(obj => {
          const num = parseInt(obj[0].split('_')[1]);
          return [0, 1, 2, 3, 4, 5].includes(num);
        })
        .map((obj: any, index: number) => {
          const data: string = JSON.stringify(obj[1]).replace(reg, '');
          // const setEffect = data.Element_009.value.Element_000.topStr

          const itemNameRegex =
            /"type":"NameTagBox","value":"\+?(\d+)?([^"]+)"/;
          const itemLevelRegex = /"leftStr2":"아이템 레벨 (\d+)/;
          const itemTierRegex = /\(티어 (\d+)\)/;
          const qualityRegex = /"qualityValue":(\d+)/;
          const baseEffectRegex = /"기본 효과","[^"]+":"([^"]+)"/;
          const additionalEffectRegex = /"추가 효과","[^"]+":"([^"]+)"/;
          const imageUriRegex = /"iconPath":"(.*?)"/;
          const iconGrade = /"iconGrade":(\d)/;
          const setNameRegex = /"topStr":"([가-힣\s]+)"},"Element_001"/;
          const setEffectRegex =
            /"bPoint":(true|false),"contentStr":"[^}]*?([^}]*?)}},"topStr":"(\d) 세트 효과/g;

          const setNameMatch = setNameRegex.exec(data);
          const setName = setNameMatch ? setNameMatch[1] : '';

          let setEffect = [];
          let setEffectMatch;
          const imageMatch = imageUriRegex.exec(data);
          while ((setEffectMatch = setEffectRegex.exec(data)) !== null) {
            setEffect.push({
              bPoint: setEffectMatch[1] === 'true',
              piece: setEffectMatch[3],
              effect: setEffectMatch[2],
            });
          }

          const nameMatch = itemNameRegex.exec(data);
          const qualityMatch = data.match(qualityRegex);
          const levelMatch = data.match(itemLevelRegex);
          const tierMatch = data.match(itemTierRegex);
          const baseEffectMatch = baseEffectRegex.exec(data);
          const additionalEffectMatch = additionalEffectRegex.exec(data);
          const iconGradeMatch = iconGrade.exec(data);

          let gear: IGear = {
            name: nameMatch ? nameMatch[2] : '',
            honing: nameMatch ? parseInt(nameMatch[1]) : 0,
            imageUri: imageMatch ? imageMatch[1] : '',
            slot: index,
            quality: qualityMatch ? parseInt(qualityMatch[1]) : -1,
            level: levelMatch ? parseInt(levelMatch[1]) : -1,
            tier: tierMatch ? parseInt(tierMatch[1]) : -1,
            setName: setName,
            setEffect: setEffect,
            baseEffect: baseEffectMatch
              ? baseEffectMatch[1].split(/(?<=\d)(?=[가-힣])/)
              : [],
            additionalEffect: additionalEffectMatch
              ? additionalEffectMatch[1].split(/(?<=\d)(?=[가-힣])/)
              : [],
            grade: iconGradeMatch ? parseInt(iconGradeMatch[1]) : 0,
          };
          return gear;
        });

      try {
        character.accessoryList = Object.entries(scriptJson.Equip)
          .filter(obj => !obj[0].match('Gem'))
          .filter(obj => {
            const num = parseInt(obj[0].split('_')[1]);
            return [6, 7, 8, 9, 10, 11, 26].includes(num);
          })
          .map((obj, index) => {
            const data: string = JSON.stringify(obj[1]).replace(reg, '');

            const nameRegex = /"type":"NameTagBox","value":"([^"]+)"/;
            const imageUriRegex = /"iconPath":"(.*?)"/;
            const qualityRegex = /"qualityValue":(\d+)/;
            const itemTierRegex = /"아이템 티어 (\d+)"/;
            const baseEffectRegex =
              /"Element_000":"기본 효과","Element_001":"([^"]+)"/;
            const additionalEffectRegex = /"추가 효과","[^"]+":"([^"]+)"/;
            const engravingRegex = /"contentStr":"\[(.+?)\] 활성도 \+(\d+)"/g;
            const braceletEffectRegex =
              /"팔찌 효과","Element_001":"\s*(.+?)\s*"/;

            const basicStatsRegex =
              /(?:체력|힘|지력|민첩|신속|치명|특화|제압|숙련|인내)\s*\+\d+/g;
            const specialAbilitiesRegex = /\[([^\]]+)\].*?\./g;

            const nameMatch = nameRegex.exec(data);
            const imageMatch = imageUriRegex.exec(data);
            const tierMatch = itemTierRegex.exec(data);
            const qualityMatch = qualityRegex.exec(data);
            const baseEffectMatch = baseEffectRegex.exec(data);
            const additionalEffectMatch = additionalEffectRegex.exec(data);
            const braceletMatch = braceletEffectRegex.exec(data);

            let braceletEffect: any[] = [];
            if (braceletMatch) {
              const basicStats = braceletMatch[1].match(basicStatsRegex);
              const specialAbilities = braceletMatch[1].match(
                specialAbilitiesRegex,
              )
                ? // @ts-ignore
                  braceletMatch[1]
                    .match(specialAbilitiesRegex)
                    .map(ability => ability.slice(0, -1))
                : [];
              braceletEffect = basicStats
                ? basicStats.concat(specialAbilities)
                : [];
            }
            let match;
            const engravingEffect = [];
            while ((match = engravingRegex.exec(data)) !== null) {
              engravingEffect.push({
                name: match[1],
                points: parseInt(match[2], 10),
              });
            }

            const accessory: IAccessory = {
              name: nameMatch ? nameMatch[1] : '',
              imageUri: imageMatch ? imageMatch[1] : '',
              slot: index,
              tier: tierMatch ? parseInt(tierMatch[1]) : -1,
              quality: qualityMatch ? parseInt(qualityMatch[1]) : -1,
              baseEffect: baseEffectMatch
                ? baseEffectMatch[1].split(/(?<=\d)(?=[가-힣]+)/)
                : [],
              additionalEffect: additionalEffectMatch
                ? additionalEffectMatch[1].split(/(?<=\d)(?=[가-힣]+)/)
                : [],
              braceletEffect: braceletEffect,
              engraving: engravingEffect,
            };
            return accessory;
          });
      } catch (err) {
        Sentry.captureException(err);
      }

      const engravingInfo = Object.entries(scriptJson.Engrave).map(obj => {
        const data: string = JSON.stringify(obj[1]).replace(reg, '');

        const nameRegex = /"value":"(.+?)"/;
        const isClassRegex = /name":"(.+?)"/;
        const effectRegex = /"레벨 별 효과보기","Element_001":"(.+?)"/;
        const imageUriRegex = /"iconPath":"(.*?)"/;
        const classRegex = /"forceMiddleText":"([^"]+)"/;

        const nameMatch = data.match(nameRegex);
        const isClassMatch = data.match(isClassRegex);
        const effectMatch = data.match(effectRegex);
        const imageMatch = data.match(imageUriRegex);
        const classMatch = data.match(classRegex);

        const levelEffects = effectMatch
          ? effectMatch[1].split(/레벨 \d+ \(활성도 \d+\) - /)
          : [];

        if (levelEffects && levelEffects.length >= 4) {
          levelEffects.shift();
        }
        if (classMatch) {
          classMatch[1].replace(' 전용', '');
        }

        let res = {
          name: nameMatch ? nameMatch[1] : '',
          imageUri: imageMatch ? imageMatch[1] : '',
          info: levelEffects ? JSON.stringify(levelEffects.concat()) : '',
        };

        if (isClassMatch) {
          // @ts-ignore
          res.classYn = isClassMatch[1] === '직업' ? 'Y' : 'N';
        }
        if (classMatch) {
          // @ts-ignore
          res.className = classMatch[1].replace(' 전용', '');
        }

        return res;
      });

      // @ts-ignore
      character.engraving = _.values(
        _.merge(
          _.keyBy(character.stats.engraving, 'name'),
          _.keyBy(engravingInfo, 'name'),
        ),
      );
      character.success = true;
      return character;
    })
    .catch(e => {
      console.log(e);
    });
};

const basicStats = ($: any) => {
  return {
    attack_power:
      parseInt(
        $(
          '#profile-ability > div.profile-ability-basic > ul > li:nth-child(1) > span:nth-child(2)',
        )
          .text()
          .trim(),
        10,
      ) || 0,
    max_health:
      parseInt(
        $(
          '#profile-ability > div.profile-ability-basic > ul > li:nth-child(2) > span:nth-child(2)',
        )
          .text()
          .trim(),
        10,
      ) || 0,
  };
};
const battleStats = ($: any) => {
  return {
    critical: parseInt(
      $(
        '#profile-ability > div.profile-ability-battle > ul > li:nth-child(1) > span:nth-child(2)',
      )
        .text()
        .trim(),
      10,
    ),
    specialization: parseInt(
      $(
        '#profile-ability > div.profile-ability-battle > ul > li:nth-child(2) > span:nth-child(2)',
      )
        .text()
        .trim(),
      10,
    ),
    domination: parseInt(
      $(
        '#profile-ability > div.profile-ability-battle > ul > li:nth-child(3) > span:nth-child(2)',
      )
        .text()
        .trim(),
      10,
    ),
    swiftness: parseInt(
      $(
        '#profile-ability > div.profile-ability-battle > ul > li:nth-child(4) > span:nth-child(2)',
      )
        .text()
        .trim(),
      10,
    ),
    endurance: parseInt(
      $(
        '#profile-ability > div.profile-ability-battle > ul > li:nth-child(5) > span:nth-child(2)',
      )
        .text()
        .trim(),
      10,
    ),
    expertise: parseInt(
      $(
        '#profile-ability > div.profile-ability-battle > ul > li:nth-child(6) > span:nth-child(2)',
      )
        .text()
        .trim(),
      10,
    ),
  };
};
const virtues = ($: any) => {
  const data = $('body > script:nth-child(13)').html().trim();
  const regex = /value:\s*\[(\d+),\s*(\d+),\s*(\d+),\s*(\d+)\]/;
  const match = data.match(regex);

  return {
    wisdom: parseInt(match[1], 10),
    courage: parseInt(match[2], 10),
    charisma: parseInt(match[3], 10),
    kindness: parseInt(match[4], 10),
  };
};
const engraving = ($: any) => {
  const data = $(
    '#profile-ability > div.profile-ability-engrave > div > div.swiper-wrapper > ul > li > span',
  ).text();
  const regex = /([가-힣\s]+) Lv\. (\d)+/g;
  const engravings = [];

  let match;
  while ((match = regex.exec(data)) !== null) {
    engravings.push({
      name: match[1].trim(),
      level: parseInt(match[2], 10),
    });
  }

  return engravings;
};
