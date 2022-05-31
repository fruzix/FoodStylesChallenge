import {NativeStackScreenProps} from '@react-navigation/native-stack';

export const NavigationRoute = {
  CardList: 'CardList',
};

export type RootStackParamList = {
  CardList: undefined;
};

export type RootStackNavigationProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
