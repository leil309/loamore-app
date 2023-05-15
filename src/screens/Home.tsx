import {SafeAreaView, ScrollView} from 'react-native';
import {useAppSelector} from '~/store';
import {useCallback, useEffect, useState} from 'react';
import CharacterCard from '~/components/CharacterCard';
import {contentContainer, mainContainer} from '~/components/styles';
import {
  useFindCharacterQuery,
  useUpsertCharacterMutation,
} from '~/gql/generated/graphql';
import {ICharacter} from '~/@types';
import BattleStatsCard from '~/components/BattleStatsCard';
import GemCard from '~/components/GemCard';
import AppSearchHeader from '~/components/common/AppSearchHeader';
import {useFocusEffect} from '@react-navigation/native';
import {getCharacter} from '~/components/common/GetCharacter';

const Home = () => {
  const characterName = useAppSelector(state => state.user.characterName)?.name;
  const [character, setCharacter] = useState<ICharacter>();

  const [cName, setCName] = useState<string>('');

  const {data, isLoadingError} = useFindCharacterQuery(
    {name: cName || ''},
    {enabled: !!cName},
  );

  const {mutate} = useUpsertCharacterMutation();

  useFocusEffect(
    useCallback(() => {
      getCharacter({name: characterName || '최고성능의가드'}).then(res => {
        setCName(JSON.stringify(res));
        if (res) {
          mutate({
            userName: res.userName,
          });
        }
      });
    }, [characterName, mutate]),
  );

  // useFocusEffect(
  //   useCallback(() => {
  //     mutate({
  //       name: cName || 'undefined',
  //     });
  //   }, [cName, mutate]),
  // );

  useEffect(() => {
    if (data?.findCharacter) {
      console.log(data.findCharacter.name);
      setCharacter(data.findCharacter);
    }
  }, [data]);

  return (
    <SafeAreaView style={mainContainer}>
      <ScrollView
        contentContainerStyle={[contentContainer, {paddingBottom: 135}]}>
        {!isLoadingError && character ? (
          <>
            <CharacterCard
              imageUri={character.image_uri}
              name={character.name}
              level={character.level}
              item_level={character.item_level}
              server={character.server_name}
              guild={character.guild_name}
              job={character.class}
            />
            <GemCard gemList={character.character_gem} />
            <BattleStatsCard
              critical={character.critical}
              domination={character.domination}
              specialization={character.specialization}
              swiftness={character.swiftness}
              endurance={character.endurance}
              expertise={character.expertise}
              wisdom={character.wisdom}
              courage={character.courage}
              charisma={character.charisma}
              kindness={character.kindness}
              engraving={character.character_engraving}
            />
          </>
        ) : null}
      </ScrollView>
      <AppSearchHeader />
    </SafeAreaView>
  );
};
export default Home;
