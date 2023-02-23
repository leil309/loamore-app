import {NavigationContainer} from '@react-navigation/native';
import AuthStacks from '~/navigation/auth/AuthStacks';
import RootDrawer from '~/navigation/RootDrawer';
import {useAppSelector} from '~/store';

const AppNavigation = () => {
  const characterName = useAppSelector(state => state.user.characterName);
  const character = useAppSelector(state => state.user.character);

  return (
    <NavigationContainer>
      {characterName?.name && character?.name ? <RootDrawer /> : <AuthStacks />}
    </NavigationContainer>
  );
};

export default AppNavigation;
