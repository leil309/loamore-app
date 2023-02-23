import {Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../store';
import userSlice from '../slices/userSlice';
import AppHeader from '~/components/common/AppHeader';
import {useEffect, useState} from 'react';
import CharacterCard from '~/components/CharacterCard';
import {Colors} from '~/components/common/Colors';
import StatCard from '~/components/StatCard';
import {baseCard, subText} from '~/components/styles';

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
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.backgroundColor}}>
      <ScrollView contentContainerStyle={{padding: 15}}>
        <View style={{height: 44}} />
        <CharacterCard imageUri={uri} />
        <StatCard name={name} level={level} server={server} />

        <Pressable style={[baseCard, {marginTop: 15}]} onPress={resetName}>
          <Text style={subText}>resetName</Text>
        </Pressable>
      </ScrollView>
      <AppHeader />
    </SafeAreaView>
  );
};
export default Home;
