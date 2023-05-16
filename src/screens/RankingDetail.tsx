import {SafeAreaView, ScrollView} from 'react-native';
import {contentContainer, mainContainer} from '~/components/styles';
import CharacterCard from '~/components/CharacterCard';
import {useCallback, useEffect, useState} from 'react';
import {ICharacter} from '~/@types';
import {
  useFindCharacterQuery,
  useUpsertCharacterMutation,
} from '~/gql/generated/graphql';
import {useFocusEffect} from '@react-navigation/native';
import {RankingStackScreenProps} from '~/navigation/types';
import AppHeader from '~/components/common/AppHeader';
import GemCard from '~/components/GemCard';
import BattleStatsCard from '~/components/BattleStatsCard';
import {getCharacter} from '~/components/common/GetCharacter';

const RankingDetail = ({route}: RankingStackScreenProps<'RankingDetail'>) => {
  const {name: characterName} = route.params;
  const [character, setCharacter] = useState<ICharacter>();

  const {data, isLoadingError} = useFindCharacterQuery(
    {name: characterName || ''},
    {enabled: !!characterName},
  );

  const {mutate} = useUpsertCharacterMutation();

  useFocusEffect(
    useCallback(() => {
      if (characterName) {
        getCharacter({name: characterName}).then(res => {
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
      <AppHeader canBack={true} />
    </SafeAreaView>
  );
};
export default RankingDetail;
