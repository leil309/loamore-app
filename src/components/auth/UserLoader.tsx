import {View} from 'react-native';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userSlice from '../../slices/userSlice';
import {useAppDispatch} from '../../store';

const UserLoader = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const getCharName = (await AsyncStorage.getItem('character_name')) || '';
      const getCharServer =
        (await AsyncStorage.getItem('character_server')) || '';
      const getCharGuild =
        (await AsyncStorage.getItem('character_guild')) || '';
      const getCharLevel =
        (await AsyncStorage.getItem('character_level')) || '';
      const getCharUri = (await AsyncStorage.getItem('character_uri')) || '';

      console.log(getCharName);
      console.log(getCharServer);
      console.log(getCharGuild);
      console.log(getCharLevel);
      console.log(getCharUri);

      if (getCharName) {
        dispatch(userSlice.actions.setCharacter({name: getCharName}));
      }
      dispatch(
        userSlice.actions.setCharacterInfo({
          name: getCharName,
          level: getCharLevel,
          guild: getCharGuild,
          uri: getCharUri,
          server: getCharServer,
        }),
      );
    })();
  });

  return <View />;
};
export default UserLoader;
