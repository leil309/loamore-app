import {Image, Text, View} from 'react-native';
import {baseCard, baseText, mainContainer} from '~/components/styles';
import {
  getGradeBackgroundColor,
  getQualityColor,
} from '~/components/common/Colors';
import {ICharacterAccessory} from '~/@types';

interface IAccessoryCard {
  accessoryList?: Array<ICharacterAccessory> | undefined | null;
}

const AccessoryCard = ({accessoryList}: IAccessoryCard) => {
  return (
    <View style={[mainContainer, {marginTop: 15}]}>
      <View style={baseCard}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {accessoryList?.map(x => {
            return (
              <View
                key={x.slot}
                style={{
                  marginHorizontal: 2,
                  borderRadius: 10,
                  borderColor: '#ffb547',
                  borderWidth: 0.5,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 10}}>{''}</Text>
                </View>
                <Image
                  source={{
                    uri: `https://cdn-lostark.game.onstove.com/${x.item.image_uri}`,
                  }}
                  style={{
                    height: 40,
                    width: 40,
                    resizeMode: 'cover',
                    backgroundColor: getGradeBackgroundColor(x.item.grade),
                  }}
                />
                {x.slot >= 0 && x.slot < 5 ? (
                  <Text
                    style={[
                      baseText,
                      {
                        backgroundColor: getQualityColor(x.quality),
                      },
                    ]}>
                    {x.quality}
                  </Text>
                ) : x.slot === 5 ? (
                  <Text style={[baseText]}>{stonePoint(x)}</Text>
                ) : null}
                {x.slot < 6 ? (
                  <Text style={[baseText, {fontSize: 12}]}>
                    {accessoryInfo(x)}
                  </Text>
                ) : (
                  braceletInfo(x)
                )}
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const accessoryInfo = (x: ICharacterAccessory) => {
  let res = '';
  if (x.slot === 0) {
    if (typeof x.additional_effect === 'string' && x.additional_effect) {
      const additionalEffect = JSON.parse(x.additional_effect);
      additionalEffect.map((ae: string) => {
        res += ae[0];
      });
    }
  }
  if (x.slot > 0 && x.slot < 5) {
    if (typeof x.additional_effect === 'string' && x.additional_effect) {
      const additionalEffect = JSON.parse(x.additional_effect);
      additionalEffect.map((ae: string) => {
        res += ae.slice(0, 2);
      });
    }
  }
  if (x.slot === 5) {
    if (typeof x.engraving === 'string' && x.engraving) {
      const engraving = JSON.parse(x.engraving);
      res = engraving
        .map((e: {name: string; points: number}, index: number) => {
          if (index < 2) {
            return e.name[0];
          }
        })
        .join(' ');
    }
  }
  return res;
};
const stonePoint = (x: ICharacterAccessory) => {
  let res = [];
  if (x.slot === 5) {
    if (typeof x.engraving === 'string' && x.engraving) {
      const engraving = JSON.parse(x.engraving);
      res = engraving
        .map((e: {name: string; points: number}, index: number) => {
          if (index < 2) {
            return e.points;
          }
        })
        .join(' ');
    }
  }
  return res;
};

const braceletInfo = (x: ICharacterAccessory) => {
  let res = [];
  if (x.slot === 6) {
    if (typeof x.bracelet_effect === 'string' && x.bracelet_effect) {
      const braceletEffect = JSON.parse(x.bracelet_effect);
      res = braceletEffect
        .map((e: string) => {
          const regex = /\[(.*?)\]/g;
          return e.match(regex)?.toString() || '';
        })
        .filter((f: string) => !!f);
    }
  }
  return (
    <View style={{marginBottom: 3, marginLeft: 1}}>
      {res.map((r: string, index: number) => (
        <Text
          key={index}
          style={[
            baseText,
            {
              textAlign: 'left',
              fontSize: 10,
            },
          ]}>
          {r.replace('[', '').replace(']', '')}
        </Text>
      ))}
    </View>
  );
};

export default AccessoryCard;
