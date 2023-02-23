import {createDrawerNavigator} from '@react-navigation/drawer';
import {RootDrawerParamList} from '~/navigation/types';
import HomeTab from '~/navigation/home/HomeTab';

const Drawer = createDrawerNavigator<RootDrawerParamList>();
const RootDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeTab">
      <Drawer.Screen name="HomeTab" component={HomeTab} />
    </Drawer.Navigator>
  );
};

export default RootDrawer;
