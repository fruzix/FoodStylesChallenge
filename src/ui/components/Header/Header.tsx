import {useWindowDimensions, ViewStyle} from 'react-native';
import React from 'react';
import useStyle from '@Framework/hooks/useStyle';
import Box from '../Box';
import LinearGradient from 'react-native-linear-gradient';
import useAppTheme from '@Framework/hooks/useTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Logo from '../Logo';

interface IHeaderStyles {
  container: ViewStyle;
  gradientOne: ViewStyle;
  gradientTwo: ViewStyle;
}

const Header = () => {
  const {width} = useWindowDimensions();
  const {colors, spacing} = useAppTheme();
  const insets = useSafeAreaInsets();

  const styles = useStyle<IHeaderStyles>(
    {
      container: {
        width,
        height: 170 + insets.top,
        paddingTop: insets.top,
      },
      gradientOne: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
      },
      gradientTwo: {
        position: 'absolute',
        width: '100%',
        height: '100%',
      },
    },
    [width],
  );

  return (
    <Box style={styles.container}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[colors.primary, colors.secondary]}
        style={styles.gradientOne}
      />
      <LinearGradient
        colors={[
          'rgba(248,248,248,0)',
          'rgba(248,248,248,0.2)',
          'rgba(248,248,248,1)',
        ]}
        style={styles.gradientTwo}
      />
      <Box px={spacing.m18}>
        <Logo />
      </Box>
    </Box>
  );
};

export default Header;
