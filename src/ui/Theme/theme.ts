import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

const ProximaNovaAlt = {
  regular: 'ProximaNovaAlt-Regular',
  semiBold: 'ProximaNovaAlt-Semibold',
  semiBoldCond: 'ProximaNovaAltCond-Semibold',
  bold: 'ProximaNovaAlt-Bold',
} as const;

interface ITypography {
  fontSize: number;
  fontFamily: ValueOf<typeof ProximaNovaAlt>;
}

export interface ITheme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    textOnLight: string;
    white: string;
    black: string;
  };
  typography: {
    h1: ITypography;
    h2: ITypography;
    body1: ITypography;
    body2: ITypography;
    caption1: ITypography;
  };
  spacing: {
    xs4: number;
    s8: number;
    m12: number;
    m14: number;
    m18: number;
  };
}

export const Theme: ITheme = {
  colors: {
    primary: '#fa7745',
    secondary: '#f3c442',
    background: '#f8f8f8',
    textOnLight: '#434343',
    white: '#fff',
    black: '#000',
  },
  typography: {
    h1: {
      fontSize: 20,
      fontFamily: ProximaNovaAlt.bold,
    },
    h2: {
      fontSize: 18,
      fontFamily: ProximaNovaAlt.bold,
    },
    body1: {
      fontSize: 18,
      fontFamily: ProximaNovaAlt.regular,
    },
    body2: {
      fontSize: 16,
      fontFamily: ProximaNovaAlt.bold,
    },
    caption1: {
      fontSize: 13,
      fontFamily: ProximaNovaAlt.semiBold,
    },
  },
  spacing: {
    xs4: 4,
    s8: 8,
    m12: 12,
    m14: 14,
    m18: 18,
  },
};

export const defaultScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};
