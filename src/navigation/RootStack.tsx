import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '~/navigation/types';
import HomeTab from '~/navigation/home/HomeTab';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Root">
      <Stack.Screen name={'Root'} component={HomeTab} />
    </Stack.Navigator>
  );
};
export default RootStack;
