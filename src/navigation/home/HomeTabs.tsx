import HomeStack from '~/navigation/home/HomeStack';
import {
  BottomTabBar,
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {HomeTabParamList} from '~/navigation/types';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {BlurView} from '@react-native-community/blur';
import {Platform, View} from 'react-native';

const Tab = createBottomTabNavigator<HomeTabParamList>();

const CustomTabBar = (props: BottomTabBarProps) => {
  return (
    <View
      style={{
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 49,
      }}>
      <BlurView
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        }}
        blurType={'dark'}
        blurAmount={Platform.OS === 'ios' ? 20 : 100}>
        <BottomTabBar {...props} style={{backgroundColor: '#000000'}} />
      </BlurView>
    </View>
  );
};

const HomeTabs = () => {
  const navigation = useNavigation<NavigationProp<HomeTabParamList>>();

  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarLabelStyle: {marginBottom: 5},
        tabBarStyle: {
          borderTopColor: '#66666666',
          backgroundColor: 'transparent',
          zIndex: 0,
          elevation: 0,
        },
      }}>
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
