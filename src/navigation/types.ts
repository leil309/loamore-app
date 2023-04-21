import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Root: NavigatorScreenParams<HomeTabParamList>;
};
export type RootDrawerParamList = {
  HomeTab: NavigatorScreenParams<HomeTabParamList>;
};

export type HomeTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  CompareStack: NavigatorScreenParams<CompareStackParamList>;
  MarketStack: NavigatorScreenParams<MarketStackParamList>;
  RankingStack: NavigatorScreenParams<RankingStackParamList>;
  MenuStack: NavigatorScreenParams<MenuStackParamList>;
};

export type HomeStackParamList = {
  Home: undefined;
  GearDetail: undefined;
};

export type AuthStackParamList = {
  SignUp: undefined;
};

export type CompareStackParamList = {
  Compare: undefined;
  CompareDetail: undefined;
};

export type MarketStackParamList = {
  Market: undefined;
  MarketDetail: undefined;
};

export type RankingStackParamList = {
  Ranking: undefined;
  RankingDetail: {
    name: string;
  };
};

export type MenuStackParamList = {
  Menu: undefined;
  MenuDetail: undefined;
};

export type RankingStackScreenProps<T extends keyof RankingStackParamList> =
  NativeStackScreenProps<RankingStackParamList, T>;
