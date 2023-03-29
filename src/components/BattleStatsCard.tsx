import {Text, View} from 'react-native';
import {baseCard, baseText, mainContainer} from '~/components/styles';

interface IBattleStats {
  critical: number;
  specialization: number;
  domination: number;
  swiftness: number;
  endurance: number;
  expertise: number;
  engraving: string;
}

const BattleStatsCard = ({
  critical,
  specialization,
  domination,
  swiftness,
  endurance,
  expertise,
  engraving,
}: IBattleStats) => {
  const stats = [
    {value: critical, name: '치명'},
    {value: specialization, name: '특화'},
    {value: domination, name: '제압'},
    {value: swiftness, name: '신속'},
    {value: endurance, name: '인내'},
    {value: expertise, name: '제압'},
  ];

  const mainStats = stats.filter(x => x.value >= 150);
  const elseStats = stats.filter(x => x.value < 150);

  const engravingList: Array<{name: string; level: number}> =
    JSON.parse(engraving);

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
      </View>
      <View style={[baseCard, {width: '48%'}]}>
        {engravingList
          ? engravingList.map((x, index) => (
              <View key={index}>
                <Text style={[baseText, {textAlign: 'left'}]}>
                  {x.level + ' ' + x.name}
                </Text>
              </View>
            ))
          : null}
      </View>
    </View>
  );
};
export default BattleStatsCard;
