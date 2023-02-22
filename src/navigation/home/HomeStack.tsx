import {HomeStackParamList} from '~/navigation/types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '~/screens/Home';
import GearDetail from '~/screens/GearDetail';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen name={'GearDetail'} component={GearDetail} />
    </Stack.Navigator>
  );
};
export default HomeStack;
