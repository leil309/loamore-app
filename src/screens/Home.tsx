import {Pressable, SafeAreaView, Text} from 'react-native';
import {useAppDispatch, useAppSelector} from '../store';
import userSlice from '../slices/userSlice';

const Home = () => {
  const dispatch = useAppDispatch();
  const character = useAppSelector(state => state.user.character);
  console.log(character?.charName);

  const resetName = () => {
    dispatch(userSlice.actions.setCharacter({charName: ''}));
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>home</Text>
      <Pressable onPress={resetName}>
        <Text>resetName</Text>
      </Pressable>
    </SafeAreaView>
  );
};
export default Home;
