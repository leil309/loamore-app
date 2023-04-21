import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CompareStackParamList} from '~/navigation/types';
import Compare from '~/screens/Compare';

const Stack = createNativeStackNavigator<CompareStackParamList>();
const CompareStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, animation: 'none'}}>
      <Stack.Screen name={'Compare'} component={Compare} />
      <Stack.Screen name={'CompareDetail'} component={Compare} />
    </Stack.Navigator>
  );
};
export default CompareStack;
