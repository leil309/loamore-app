import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../store';
import userSlice from '../slices/userSlice';
import AppHeader from '~/components/common/AppHeader';
import {useEffect, useState} from 'react';
import CharacterCard from '~/components/CharacterCard';

const Home = () => {
  const dispatch = useAppDispatch();
  const cheerio = require('react-native-cheerio');
  const character = useAppSelector(state => state.user.character);

  const [name, setName] = useState('');
  const [level, setLevel] = useState('');
  const [guild, setGuild] = useState('');
  const [server, setServer] = useState('');
  const [uri, setUri] = useState('');

  const resetName = () => {
    dispatch(userSlice.actions.setCharacter({charName: ''}));
  };

  useEffect(() => {
    fetch(
      `https://lostark.game.onstove.com/Profile/Character/${character?.charName}`,
    )
      .then(response => response.text())
      .then(html => {
        const $ = cheerio.load(html);

        const tName = $('.profile-character-info__name').text();
        const tLevel = $('.level-info__item').text();
        const tGuild = $('.profile-character-info__guild').text();
        const tServer = $('.profile-character-info__server').text();
        const tUri = $('.profile-equipment__character img').attr('src');

        console.log(tName);
        console.log(tLevel);
        console.log(tGuild);
        console.log(tServer);

        setName(tName);
        setLevel(tLevel);
        setGuild(tGuild);
        setServer(tServer);
        setUri(tUri);
      });
  }, [character?.charName, cheerio]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#15181d'}}>
      <ScrollView>
        <View style={{height: 45}} />
        <CharacterCard imageUri={uri} />
        <CharacterCard imageUri={uri} />
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{level}</Text>
        <Text style={styles.text}>{guild}</Text>
        <Text style={styles.text}>{server}</Text>
        <Pressable onPress={resetName}>
          <Text style={styles.text}>resetName</Text>
        </Pressable>
      </ScrollView>
      <AppHeader />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  text: {
    color: '#FFFFFF',
  },
});
export default Home;
