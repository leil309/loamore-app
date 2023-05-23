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

  const classEngraving = data?.findCharacter.character_engraving
    ? data?.findCharacter.character_engraving.filter(
        x => x.engraving.class_yn === IClassYn.Y,
      )
    : null;
  const normalEngraving = data?.findCharacter.character_engraving
    ? data?.findCharacter.character_engraving
        .filter(x => x.engraving.class_yn === IClassYn.N)
        .sort((a, b) => a.engraving.id - b.engraving.id)
    : null;
  const averageEngraving: Array<IEngraving> | null | undefined =
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
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={[baseCard, {width: '48%'}]}>
            <Text style={baseText}>내 각인</Text>
            <EngravingList
              classEngraving={classEngraving}
              battleEngraving={normalEngraving}
            />
          </View>
          <View style={[baseCard, {width: '48%'}]}>
            <Text style={baseText}>평균 각인</Text>
            <EngravingList
              classEngraving={classEngraving}
              battleEngraving={averageEngraving}
            />
          </View>
        </View>
      </ScrollView>
      <AppHeader />
    </SafeAreaView>
  );
};
export default Compare;
