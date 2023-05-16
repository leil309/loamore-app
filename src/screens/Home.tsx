import {ActivityIndicator, SafeAreaView, ScrollView, View} from 'react-native';
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
  const characterName =
    useAppSelector(state => state.user.characterName)?.name || '최고성능의가드';
  const [character, setCharacter] = useState<ICharacter>();

  const [loading, setLoading] = useState<boolean>(false);

  const {data, isLoadingError} = useFindCharacterQuery(
    {name: characterName},
    {enabled: !!characterName},
  );

  const {mutate} = useUpsertCharacterMutation();

  useFocusEffect(
    useCallback(() => {
      if (characterName) {
        console.log('start');
        setLoading(true);
        getCharacter({name: characterName}).then(res => {
          console.log('end');
          setLoading(false);
          if (res) {
            mutate({
              args: JSON.stringify(res),
            });
          }
        });
      }
    }, [characterName, mutate]),
  );

  useEffect(() => {
    if (data?.findCharacter) {
      setCharacter(data.findCharacter);
    }
  }, [data]);

  return (
    <SafeAreaView style={mainContainer}>
      {loading && !data ? (
        <View style={{height: '100%', justifyContent: 'center'}}>
          <ActivityIndicator size={'large'} color={'#FFFFFF'} />
        </View>
      ) : (
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
      )}
      <AppSearchHeader />
    </SafeAreaView>
  );
};
export default Home;
