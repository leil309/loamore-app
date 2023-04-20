import {NavigationContainer} from '@react-navigation/native';
import AuthStacks from '~/navigation/auth/AuthStacks';
import {useAppSelector} from '~/store';
import {StatusBar} from 'react-native';
import RootStack from '~/navigation/RootStack';

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
      {characterName?.name && character?.name ? <RootStack /> : <AuthStacks />}
    </NavigationContainer>
  );
};

export default AppNavigation;
