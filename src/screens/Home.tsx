import {Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '~/store';
import userSlice from '../slices/userSlice';
import AppHeader from '~/components/common/AppHeader';
import {useEffect, useState} from 'react';
import CharacterCard from '~/components/CharacterCard';
import StatCard from '~/components/StatCard';
import {baseText, contentContainer, mainContainer} from '~/components/styles';

const Home = () => {
  const dispatch = useAppDispatch();
  const cheerio = require('react-native-cheerio');
  const charName = useAppSelector(state => state.user.characterName)?.name;
  const character = useAppSelector(state => state.user.character);

  console.log('char NAME', charName);
  console.log('char', character);

  const [name, setName] = useState(character?.name || '');
  const [level, setLevel] = useState(character?.level || '');
  const [guild, setGuild] = useState(character?.guild || '');
  const [server, setServer] = useState(character?.server || '');
  const [job, setJob] = useState(character?.job || '');
  const [uri, setUri] = useState(character?.uri || '');

  const reload = () => {
    fetch(`https://lostark.game.onstove.com/Profile/Character/${charName}`)
      .then(response => response.text())
      .then(html => {
        const $ = cheerio.load(html);
        const test = $('.states_box');
        console.log(test);
        // console.log($('script').get()[2]);
      });
  };

  useEffect(() => {
    if (!character?.uri) {
      fetch(`https://lostark.game.onstove.com/Profile/Character/${charName}`)
        .then(response => response.text())
        .then(html => {
          console.log('runs');
          const $ = cheerio.load(html);

          const tName = $('.profile-character-info__name').text();
          const tLevel = $('.profile-character-info__lv').text();
          const tGuild = $('.profile-character-info__guild').text();
          const tServer = $('.profile-character-info__server')
            .text()
            .replace('@', '');
          const tJob = $('.profile-character-info__img').attr('alt');
          const tUri = $('.profile-equipment__character img').attr('src');

          setName(tName);
          setLevel(tLevel);
          setGuild(tGuild);
          setServer(tServer);
          setUri(tUri);
          setJob(tJob);

          dispatch(
            userSlice.actions.setCharacterInfo({
              name: tName || '',
              guild: tGuild || '',
              server: tServer || '',
              level: tLevel || '',
              uri: tUri || '',
              job: tJob || '',
            }),
          );
        });
    }
  }, [character, charName, cheerio, dispatch]);

  return (
    <SafeAreaView style={mainContainer}>
      <ScrollView contentContainerStyle={contentContainer}>
        <CharacterCard imageUri={uri} />
        <StatCard
          name={name}
          level={level}
          server={server}
          guild={guild}
          job={job}
        />
        <View style={{marginTop: 15}} />

        <Pressable onPress={reload}>
          <Text style={baseText}>reload</Text>
        </Pressable>

        <CharacterCard imageUri={uri} />
        <StatCard
          name={name}
          level={level}
          server={server}
          guild={guild}
          job={job}
        />
      </ScrollView>
      <AppHeader />
    </SafeAreaView>
  );
};
export default Home;
