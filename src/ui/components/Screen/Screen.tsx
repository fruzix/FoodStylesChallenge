import useStyle from '@Framework/hooks/useStyle';
import useAppTheme from '@Framework/hooks/useTheme';
import React from 'react';
import {Platform, ViewStyle} from 'react-native';
import {
  Edge,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

interface IScreen {
  children?: React.ReactNode;
  edges?: Edge[];
  style?: ViewStyle;
  testID?: string;
  insetBottom?: boolean;
}

interface ScreenStyles {
  screen: ViewStyle;
}

const Screen = ({
  children,
  insetBottom = true,
  edges = ['right', 'left'],
}: IScreen) => {
  const insets = useSafeAreaInsets();
  const {colors, spacing} = useAppTheme();

  const styles = useStyle<ScreenStyles>(
    {
      screen: {
        flex: 1,
        backgroundColor: colors.background,
        paddingBottom: insetBottom
          ? Platform.select({
              android: spacing.m12,
              ios: insets.bottom,
            })
          : 0,
      },
    },
    [insets, insetBottom, colors],
  );

  return (
    <SafeAreaView style={styles.screen} edges={edges}>
      {children}
    </SafeAreaView>
  );
};

export {Screen};
