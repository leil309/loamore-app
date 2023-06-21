import {SafeAreaView, ScrollView} from 'react-native';
import {contentContainer, mainContainer} from '~/components/styles';
import CharacterCard from '~/components/CharacterCard';
import React, {useCallback, useEffect, useState} from 'react';
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
import GearCard from '~/components/GearCard';

const RankingDetail = ({route}: RankingStackScreenProps<'RankingDetail'>) => {
  const {name: characterName} = route.params;
  const [character, setCharacter] = useState<ICharacter>();
  const [loading, setLoading] = useState<boolean>(false);
  const {data, isLoadingError, refetch} = useFindCharacterQuery(
    {name: characterName || ''},
    {enabled: !!characterName, cacheTime: 0},
  );

  const {mutate} = useUpsertCharacterMutation();
  useFocusEffect(
    useCallback(() => {
      if (characterName) {
        const min = character
          ? (new Date().getTime() - Date.parse(character.upd_date)) / 1000 / 60
          : 0;
        if (min > 5) {
          setLoading(true);
          getCharacter({name: characterName})
            .then(res => {
              if (res) {
                mutate(
                  {
                    args: JSON.stringify(res),
                  },
                  {
                    onSuccess: result => {
                      setCharacter(result.upsertCharacter);
                      refetch();
                    },
                  },
                );
              }
            })
            .finally(() => {
              setLoading(false);
            });
        }
      }
    }, [character, characterName, mutate, refetch]),
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
              isLoading={loading}
              imageUri={character.image_uri}
              name={character.name}
              level={character.level}
              item_level={character.item_level}
              server={character.server_name}
              guild={character.guild_name}
              job={character.class}
            />
            <GemCard gemList={character.character_gem} />
            <GearCard gearList={character.character_gear} />
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
