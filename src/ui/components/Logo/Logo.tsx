import React from 'react';
import {Image} from 'react-native';

import Box from '../Box';

import {LOGO} from '@App/assets/icons';
import {ViewStyle} from 'react-native';
import useStyle from '@Framework/hooks/useStyle';

interface ILogo {
  container: ViewStyle;
}

const Logo = () => {
  const styles = useStyle<ILogo>({
    container: {
      height: 28,
      width: 19,
    },
  });

  return (
    <Box style={styles.container}>
      <Image source={LOGO} resizeMode="contain" />
    </Box>
  );
};

export default Logo;
