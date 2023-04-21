import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MenuStackParamList} from '~/navigation/types';
import Menu from '~/screens/Menu';

const Stack = createNativeStackNavigator<MenuStackParamList>();
const MenuStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, animation: 'none'}}>
      <Stack.Screen name={'Menu'} component={Menu} />
      <Stack.Screen name={'MenuDetail'} component={Menu} />
    </Stack.Navigator>
  );
};
export default MenuStack;
