import {NavigatorScreenParams} from '@react-navigation/native';
import GearDetail from '~/screens/GearDetail';

export type RootStackParamList = {
  Root: NavigatorScreenParams<HomeTabParamList>;
};
export type RootDrawerParamList = {
  HomeTab: NavigatorScreenParams<HomeTabParamList>;
};

export type HomeTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  AnalyzeStack: NavigatorScreenParams<AnalyzeStackParamList>;
};

export type HomeStackParamList = {
  Home: undefined;
  GearDetail: undefined;
};

export type AuthStackParamList = {
  SignUp: undefined;
};

export type AnalyzeStackParamList = {
  HomeDrawer: undefined;
};
