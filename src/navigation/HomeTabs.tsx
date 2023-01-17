import HomeStack from './homeRoots/HomeStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeTabParamList} from './types';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator<HomeTabParamList>();

const HomeTabs = () => {
  const navigation = useNavigation<NavigationProp<HomeTabParamList>>();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={'HomeStack'}
        component={HomeStack}
        listeners={{
          tabPress: () =>
            navigation.navigate('HomeStack', {
              screen: 'Home',
            }),
        }}
        options={{
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'AnalyzeStack'}
        component={HomeStack}
        listeners={{
          tabPress: () =>
            navigation.navigate('HomeStack', {
              screen: 'Home',
            }),
        }}
        options={{
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'heart' : 'heart-outline'}
              color={color}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default HomeTabs;
