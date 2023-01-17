import {NavigationContainer} from '@react-navigation/native';
import HomeTabs from './HomeTabs';

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <HomeTabs />
    </NavigationContainer>
  );
};

export default AppNavigation;
