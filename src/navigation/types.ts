import {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParamList = {
  Root: NavigatorScreenParams<HomeTabParamList>;
};
export type RootDrawerParamList = {
  HomeTab: NavigatorScreenParams<HomeTabParamList>;
};

export type HomeTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  secondStack: NavigatorScreenParams<AnalyzeStackParamList>;
  AnalyzeStack: NavigatorScreenParams<AnalyzeStackParamList>;
  RankingStack: NavigatorScreenParams<AnalyzeStackParamList>;
  MenuStack: NavigatorScreenParams<AnalyzeStackParamList>;
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
