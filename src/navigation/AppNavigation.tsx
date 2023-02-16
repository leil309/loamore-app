import {NavigationContainer} from '@react-navigation/native';
import HomeTabs from './HomeTabs';
import {useAppSelector} from '../store';
import AuthStacks from './AuthStacks';

const AppNavigation = () => {
  const character = useAppSelector(state => state.user.character);
  return (
    <NavigationContainer>
      {character?.charName ? <HomeTabs /> : <AuthStacks />}
    </NavigationContainer>
  );
};

export default AppNavigation;
