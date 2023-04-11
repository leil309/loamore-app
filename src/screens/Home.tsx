import {SafeAreaView, ScrollView} from 'react-native';
import {useAppSelector} from '~/store';
import AppHeader from '~/components/common/AppHeader';
import {useEffect, useState} from 'react';
import CharacterCard from '~/components/CharacterCard';
import {contentContainer, mainContainer} from '~/components/styles';
import {useFindCharacterQuery} from '~/gql/generated/graphql';
import {ICharacter} from '~/@types';
import BattleStatsCard from '~/components/BattleStatsCard';
import GemCard from '~/components/GemCard';

const Home = () => {
  const characterName = useAppSelector(state => state.user.characterName)?.name;
  const [character, setCharacter] = useState<ICharacter>();
  const {data, isLoadingError} = useFindCharacterQuery(
    {name: characterName || ''},
    {enabled: !!characterName},
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
      <AppHeader />
    </SafeAreaView>
  );
};
export default Home;
