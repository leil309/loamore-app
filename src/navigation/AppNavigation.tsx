import {NavigationContainer} from '@react-navigation/native';
import AuthStacks from '~/navigation/auth/AuthStacks';
import RootDrawer from '~/navigation/RootDrawer';
import {useAppSelector} from '~/store';
import {StatusBar, View} from 'react-native';

const AppNavigation = () => {
  const characterName = useAppSelector(state => state.user.characterName);
  const character = useAppSelector(state => state.user.character);

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'light-content'}
        translucent={true}
      />
      {characterName?.name && character?.name ? <RootDrawer /> : <AuthStacks />}
    </NavigationContainer>
  );
};

export default AppNavigation;
