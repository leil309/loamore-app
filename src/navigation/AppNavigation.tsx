import {NavigationContainer} from '@react-navigation/native';
import AuthStacks from '~/navigation/auth/AuthStacks';
import RootDrawer from '~/navigation/RootDrawer';
import {useAppSelector} from '~/store';

const AppNavigation = () => {
  const characterName = useAppSelector(state => state.user.characterName);

  return (
    <NavigationContainer>
      {characterName?.name ? <RootDrawer /> : <AuthStacks />}
    </NavigationContainer>
  );
};

export default AppNavigation;
