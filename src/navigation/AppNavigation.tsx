import {NavigationContainer} from '@react-navigation/native';
import AuthStacks from '~/navigation/auth/AuthStacks';
import RootDrawer from '~/navigation/RootDrawer';
import {useAppSelector} from '~/store';
import {StatusBar} from 'react-native';

const AppNavigation = () => {
  const characterName = useAppSelector(state => state.user.characterName);
  const character = useAppSelector(state => state.user.character);

  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />
      {characterName?.name && character?.name ? <RootDrawer /> : <AuthStacks />}
    </NavigationContainer>
  );
};

export default AppNavigation;
