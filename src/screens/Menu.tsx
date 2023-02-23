import {
  baseCard,
  baseText,
  contentContainer,
  mainContainer,
  subText,
} from '~/components/styles';
import {Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';
import AppHeader from '~/components/common/AppHeader';
import userSlice from '~/slices/userSlice';
import {useAppDispatch} from '~/store';

const Menu = () => {
  const dispatch = useAppDispatch();
  const resetName = () => {
    dispatch(userSlice.actions.setCharacter({name: ''}));
  };

  return (
    <SafeAreaView style={mainContainer}>
      <ScrollView contentContainerStyle={contentContainer}>
        <Pressable style={baseCard} onPress={resetName}>
          <Text style={subText}>캐릭터 재설정</Text>
        </Pressable>
      </ScrollView>
      <AppHeader />
    </SafeAreaView>
  );
};
export default Menu;
