import {Image, Text, View} from 'react-native';
import {baseCard, baseText, mainContainer} from '~/components/styles';
import {IEngraving} from '~/@types';
import {IClassYn} from '~/gql/generated/graphql';
import {EngravingList} from '~/components/EngravingList';
import {useEffect, useState} from 'react';

interface IBattleStats {
  critical: number;
  specialization: number;
  domination: number;
  swiftness: number;
  endurance: number;
  expertise: number;
  wisdom: number;
  courage: number;
  charisma: number;
  kindness: number;
  engraving: Array<IEngraving> | undefined | null;
}

const defaultImg = Image.resolveAssetSource(
  require('assets/default-character.png'),
);

const BattleStatsCard = ({
  critical,
  specialization,
  domination,
  swiftness,
  endurance,
  expertise,
  wisdom,
  courage,
  charisma,
  kindness,
  engraving,
}: IBattleStats) => {
  const battleStats = [
    {value: critical, name: '치명'},
    {value: specialization, name: '특화'},
    {value: domination, name: '제압'},
    {value: swiftness, name: '신속'},
    {value: endurance, name: '인내'},
    {value: expertise, name: '숙련'},
  ];
  const virtueStats = [
    {value: wisdom, name: '지혜'},
    {value: courage, name: '용기'},
    {value: charisma, name: '매력'},
    {value: kindness, name: '친절'},
  ];

  const [normalEngraving, setNormalEngraving] = useState<Array<IEngraving>>();
  const [classEngraving, setClassEngraving] = useState<Array<IEngraving>>();

  const mainStats = battleStats
    .filter(x => x.value >= 150)
    .sort((a, b) => {
      return b.value - a.value;
    });
  const elseStats = battleStats.filter(x => x.value < 150);

  useEffect(() => {
    if (engraving?.length) {
      console.log(engraving.map(x => x.engraving.name));
      setClassEngraving(
        engraving?.filter(x => x.engraving.class_yn === IClassYn.Y),
      );
      setNormalEngraving(
        engraving?.filter(x => x.engraving.class_yn === IClassYn.N),
      );
    }
  }, [engraving]);

  return (
    <View
      style={[
        mainContainer,
        {marginTop: 15, flexDirection: 'row', justifyContent: 'space-between'},
      ]}>
      <View style={[baseCard, {width: '48%'}]}>
        {mainStats
          ? mainStats.map((x, index) => (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={[baseText]}>{x.name}</Text>
                <Text style={[baseText, {fontSize: 20}]}>{x.value}</Text>
              </View>
            ))
          : null}
        <View
          style={{
            borderColor: '#FFFFFF',
            borderBottomWidth: 0.5,
            borderTopWidth: 0.5,
            marginVertical: 4,
          }}
        />
        {elseStats
          ? elseStats.map((x, index) => (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={[baseText]}>{x.name}</Text>
                <Text style={[baseText]}>{x.value}</Text>
              </View>
            ))
          : null}
        <View
          style={{
            borderColor: '#FFFFFF',
            borderBottomWidth: 0.5,
            borderTopWidth: 0.5,
            marginVertical: 4,
          }}
        />
        {virtueStats
          ? virtueStats.map((x, index) => (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={[baseText, {color: '#999999', fontSize: 12}]}>
                  {x.name}
                </Text>
                <Text style={[baseText, {color: '#999999', fontSize: 12}]}>
                  {x.value}
                </Text>
              </View>
            ))
          : null}
      </View>
      <View style={[baseCard, {width: '48%'}]}>
        <EngravingList
          battleEngraving={normalEngraving}
          classEngraving={classEngraving}
        />
      </View>
    </View>
  );
};

export default BattleStatsCard;
