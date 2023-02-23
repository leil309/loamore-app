import HomeStack from '~/navigation/home/HomeStack';
import {
  BottomTabBar,
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {HomeTabParamList} from '~/navigation/types';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
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
      }}>
      <BlurView blurType={'dark'} blurAmount={Platform.OS === 'ios' ? 20 : 25}>
        <BottomTabBar {...props} />
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
          backgroundColor:
            Platform.OS === 'ios' ? 'transparent' : 'rgba(255,255,255,0.05)',
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
          tabBarLabel: '홈',
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
        name={'secondStack'}
        component={HomeStack}
        listeners={{
          tabPress: () =>
            navigation.navigate('HomeStack', {
              screen: 'Home',
            }),
        }}
        options={{
          tabBarLabel: '분석',
          tabBarIcon: ({color, focused}) => (
            <MaterialIcons
              name={focused ? 'person' : 'person-outline'}
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
          tabBarLabel: '전체',
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'heart' : 'heart-outline'}
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'RankingStack'}
        component={HomeStack}
        listeners={{
          tabPress: () =>
            navigation.navigate('HomeStack', {
              screen: 'Home',
            }),
        }}
        options={{
          tabBarLabel: '랭킹',
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'alpha-r-box' : 'alpha-r-box-outline'}
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'MenuStack'}
        component={HomeStack}
        listeners={{
          tabPress: () =>
            navigation.navigate('HomeStack', {
              screen: 'Home',
            }),
        }}
        options={{
          tabBarLabel: '메뉴',
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'menu' : 'menu'}
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
