import {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParamList = {
  Root: NavigatorScreenParams<HomeTabParamList>;
};

export type HomeTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  AnalyzeStack: NavigatorScreenParams<AnalyzeStackParamList>;
};

export type HomeStackParamList = {
  HomeDrawer: undefined;
  Home: undefined;
};

export type AuthStackParamList = {
  SignUp: undefined;
};

export type AnalyzeStackParamList = {
  HomeDrawer: undefined;
};
