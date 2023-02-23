import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RankingStackParamList} from '~/navigation/types';
import Ranking from '~/screens/Ranking';

const Stack = createNativeStackNavigator<RankingStackParamList>();
const RankingStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Ranking'} component={Ranking} />
      <Stack.Screen name={'RankingDetail'} component={Ranking} />
    </Stack.Navigator>
  );
};
export default RankingStack;
