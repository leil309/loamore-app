import {Image, Text, View} from 'react-native';
import {baseCard, baseText, mainContainer} from '~/components/styles';
import {IEngraving} from '~/@types';
import {IClassYn} from '~/gql/generated/graphql';

interface IBattleStats {
  critical: number;
  specialization: number;
  domination: number;
  swiftness: number;
  endurance: number;
  expertise: number;
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

  const classEngraving = engraving?.filter(
    x => x.engraving.class_yn === IClassYn.Y,
  );
  const normalEngraving = engraving?.filter(
    x => x.engraving.class_yn === IClassYn.N,
  );

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
        {classEngraving ? classEngraving.map(x => EngravingItem(x)) : null}
        <View
          style={{
            borderColor: '#FFFFFF',
            borderBottomWidth: 0.5,
            borderTopWidth: 0.5,
            marginVertical: 4,
          }}
        />
        {normalEngraving ? normalEngraving.map(x => EngravingItem(x)) : null}
      </View>
    </View>
  );
};

const EngravingItem = (x: IEngraving) => {
  return (
    <View
      key={x.slot}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Image
        defaultSource={defaultImg}
        source={{
          uri: `https://cdn-lostark.game.onstove.com/${x.engraving.image_uri}`,
        }}
        style={{
          borderRadius: 99,
          borderColor: '#AAAAAA',
          borderWidth: 0.5,
          width: 30,
          height: 30,
          marginRight: 10,
          marginBottom: 1.5,
        }}
        resizeMode={'contain'}
      />
      <Text
        style={[
          baseText,
          {
            textAlign: 'left',
          },
        ]}>
        {x.level + ' ' + x.engraving.name}
      </Text>
    </View>
  );
};

export default BattleStatsCard;
