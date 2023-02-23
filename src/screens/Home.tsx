import {Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../store';
import userSlice from '../slices/userSlice';
import AppHeader from '~/components/common/AppHeader';
import {useEffect, useState} from 'react';
import CharacterCard from '~/components/CharacterCard';
import {Colors} from '~/components/common/Colors';
import StatCard from '~/components/StatCard';
import {
  baseCard,
  contentContainer,
  mainContainer,
  subText,
} from '~/components/styles';

const Home = () => {
  const dispatch = useAppDispatch();
  const cheerio = require('react-native-cheerio');
  const charName = useAppSelector(state => state.user.characterName)?.name;
  const character = useAppSelector(state => state.user.character);

  const [name, setName] = useState(character?.name || '');
  const [level, setLevel] = useState(character?.level || '');
  const [guild, setGuild] = useState(character?.guild || '');
  const [server, setServer] = useState(character?.server || '');
  const [uri, setUri] = useState(character?.uri || '');

  useEffect(() => {
    if (!character) {
      fetch(`https://lostark.game.onstove.com/Profile/Character/${charName}`)
        .then(response => response.text())
        .then(html => {
          const $ = cheerio.load(html);

          const tName = $('.profile-character-info__name').text();
          const tLevel = $('.level-info__item').text();
          const tGuild = $('.profile-character-info__guild').text();
          const tServer = $('.profile-character-info__server').text();
          const tUri = $('.profile-equipment__character img').attr('src');

          setName(tName);
          setLevel(tLevel);
          setGuild(tGuild);
          setServer(tServer);
          setUri(tUri);

          dispatch(
            userSlice.actions.setCharacterInfo({
              name: tName || '',
              guild: tGuild || '',
              server: tServer || '',
              level: tLevel || '',
              uri: tUri || '',
            }),
          );
        });
    }
  }, [character, charName, cheerio, dispatch]);

  return (
    <SafeAreaView style={mainContainer}>
      <ScrollView contentContainerStyle={contentContainer}>
        <CharacterCard imageUri={uri} />
        <StatCard name={name} level={level} server={server} guild={guild} />
        <View style={{marginTop: 15}} />
        <CharacterCard imageUri={uri} />
        <StatCard name={name} level={level} server={server} guild={guild} />
      </ScrollView>
      <AppHeader />
    </SafeAreaView>
  );
};
export default Home;
