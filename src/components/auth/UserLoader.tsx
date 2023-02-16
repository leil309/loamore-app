import {View} from 'react-native';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userSlice from '../../slices/userSlice';
import {useAppDispatch} from '../../store';

const UserLoader = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const getCharName = await AsyncStorage.getItem('character_name');

      if (getCharName) {
        dispatch(userSlice.actions.setCharacter({charName: getCharName}));
      }
    })();
  });

  return <View />;
};
export default UserLoader;
