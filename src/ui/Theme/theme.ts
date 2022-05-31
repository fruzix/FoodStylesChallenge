import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

const ProximaNovaAlt = {
  regular: 'ProximaNovAlt-Regular',
  semiBold: 'ProximaNovAlt-SemiBold',
  semiBoldCond: 'ProximaNovAltCond-SemiBold',
  bold: 'ProximaNovAlt-Bold',
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
  };
  typography: {
    h1: ITypography;
    h2: ITypography;
    body1: ITypography;
    body2: ITypography;
    caption1: ITypography;
  };
  spacing: {
    xs4: 4;
    s8: 8;
    m12: 12;
  };
}

export const Theme: ITheme = {
  colors: {
    primary: '#fa7745',
    secondary: '#f3c442',
    background: '#f8f8f8',
    textOnLight: '#434343',
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
  },
};

export const defaultScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};
