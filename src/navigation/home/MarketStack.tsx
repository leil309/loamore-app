import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MarketStackParamList} from '~/navigation/types';
import Market from '~/screens/Market';

const Stack = createNativeStackNavigator<MarketStackParamList>();
const MarketStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Market'} component={Market} />
      <Stack.Screen name={'MarketDetail'} component={Market} />
    </Stack.Navigator>
  );
};
export default MarketStack;
