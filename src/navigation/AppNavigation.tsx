import {NavigationContainer} from '@react-navigation/native';
import AuthStacks from '~/navigation/auth/AuthStacks';
import RootDrawer from '~/navigation/RootDrawer';
import {useAppSelector} from '~/store';

const AppNavigation = () => {
  const character = useAppSelector(state => state.user.character);
  return (
    <NavigationContainer>
      {character?.charName ? <RootDrawer /> : <AuthStacks />}
    </NavigationContainer>
  );
};

export default AppNavigation;
