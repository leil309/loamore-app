import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RankingStackParamList} from '~/navigation/types';
import Ranking from '~/screens/Ranking';
import RankingDetail from '~/screens/RankingDetail';

const Stack = createNativeStackNavigator<RankingStackParamList>();
const RankingStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, animation: 'none'}}>
      <Stack.Screen name={'Ranking'} component={Ranking} />
      <Stack.Screen name={'RankingDetail'} component={RankingDetail} />
    </Stack.Navigator>
  );
};
export default RankingStack;
