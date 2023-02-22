import {createDrawerNavigator} from '@react-navigation/drawer';
import {RootDrawerParamList} from '~/navigation/types';
import HomeTabs from '~/navigation/home/HomeTabs';

const Drawer = createDrawerNavigator<RootDrawerParamList>();
const RootDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeTab">
      <Drawer.Screen name="HomeTab" component={HomeTabs} />
    </Drawer.Navigator>
  );
};

export default RootDrawer;
