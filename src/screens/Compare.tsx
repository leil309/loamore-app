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
            <Text style={baseText}>내 보석</Text>
          </View>
          <View style={[baseCard, {width: '48%'}]}>
            <Text style={baseText}>평균 보석</Text>
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
          </View>
          <View style={[baseCard, {width: '48%'}]}>
            <Text style={baseText}>평균 스탯</Text>
            {topStats?.findAverageStats && topStats?.findAverageStats[0]
              ? topStats?.findAverageStats[0].stats.map(x => {
                  return (
                    <View>
                      <Text style={baseText}>{x.value}</Text>
                    </View>
                  );
                })
              : null}
          </View>
        </View>
      </ScrollView>
      <AppHeader />
    </SafeAreaView>
  );
};
export default Compare;
