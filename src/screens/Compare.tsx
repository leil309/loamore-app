import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {
  baseCard,
  baseText,
  contentContainer,
  mainContainer,
} from '~/components/styles';
import AppHeader from '~/components/common/AppHeader';
import {EngravingList} from '~/components/EngravingList';
import {
  IClassYn,
  useFindAverageEngravingQuery,
  useFindAverageStatsQuery,
  useFindCharacterQuery,
} from '~/gql/generated/graphql';
import {useAppSelector} from '~/store';
import {IEngraving} from '~/@types';
import CompareStatsCard from '~/components/CompareStatsCard';

const Compare = () => {
  const characterName = useAppSelector(state => state.user.characterName)?.name;

  const {data} = useFindCharacterQuery(
    {name: characterName || ''},
    {enabled: !!characterName},
  );
  const {data: topData} = useFindAverageEngravingQuery(
    {name: characterName || ''},
    {enabled: !!characterName},
  );

  const {data: topStats} = useFindAverageStatsQuery(
    {name: characterName || ''},
    {enabled: !!characterName},
  );

  const classEngraving = data?.findCharacter.character_engraving
    ? data?.findCharacter.character_engraving.filter(
        x => x.engraving.class_yn === IClassYn.Y,
      )
    : null;
  const myEngraving = data?.findCharacter.character_engraving
    ? data?.findCharacter.character_engraving
        .filter(x => x.engraving.class_yn === IClassYn.N)
        .sort((a, b) => a.engraving.id - b.engraving.id)
    : null;
  const rankerEngraving: Array<IEngraving> | null | undefined =
    topData?.findAverageEngraving[0].engraving.map(x => {
      return {
        id: x.id,
        level: x.level,
        slot: 0,
        engraving: {
          class_yn: x.class_yn,
          id: x.id,
          image_uri: x.image_uri,
          info: '',
          name: x.name,
        },
      };
    });
  const battleStats = [
    {value: data?.findCharacter.critical || 0, name: '치명'},
    {value: data?.findCharacter.specialization || 0, name: '특화'},
    {value: data?.findCharacter.domination || 0, name: '제압'},
    {value: data?.findCharacter.swiftness || 0, name: '신속'},
    {value: data?.findCharacter.endurance || 0, name: '인내'},
    {value: data?.findCharacter.expertise || 0, name: '숙련'},
  ];

  const mainStats = battleStats
    .filter(x => x.value >= 150)
    .sort((a, b) => {
      return b.value - a.value;
    });

  return (
    <SafeAreaView style={mainContainer}>
      <ScrollView contentContainerStyle={contentContainer}>
        <View style={baseCard}>
          <Text style={baseText}>내 세팅</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <View style={[baseCard, {width: '48%'}]}>
            <Text style={baseText}>내 각인</Text>
            <EngravingList
              classEngraving={classEngraving}
              battleEngraving={myEngraving}
            />
          </View>
          <View style={[baseCard, {width: '48%'}]}>
            <Text style={baseText}>평균 각인</Text>
            <EngravingList
              classEngraving={classEngraving}
              battleEngraving={rankerEngraving}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <View style={[baseCard, {width: '48%'}]}>
            <Text style={baseText}>내 스탯</Text>
            <CompareStatsCard stats={mainStats} />
          </View>
          <View style={[baseCard, {width: '48%'}]}>
            <Text style={baseText}>평균 주스탯</Text>
            <CompareStatsCard stats={topStats?.findAverageStats[0].stats} />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <View style={[baseCard]}>
            <Text style={baseText}>무기품질</Text>
          </View>
        </View>
      </ScrollView>
      <AppHeader />
    </SafeAreaView>
  );
};
export default Compare;
