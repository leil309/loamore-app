import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParamList} from '~/navigation/types';
import SignUp from '~/screens/SignUp';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStacks = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'SignUp'} component={SignUp} />
    </Stack.Navigator>
  );
};
export default AuthStacks;
