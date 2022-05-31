import {NativeStackScreenProps} from '@react-navigation/native-stack';

export const NavigationRoute = {
  Home: 'Home',
};

export type RootStackParamList = {
  Home: undefined;
};

export type RootStackNavigationProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
