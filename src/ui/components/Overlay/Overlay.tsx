import React from 'react';
import {ViewStyle, useWindowDimensions} from 'react-native';
import {BlurView} from '@react-native-community/blur';

import useStyle from '@Framework/hooks/useStyle';

interface IOverlayStyle {
  container: ViewStyle;
}

const Overlay = () => {
  const {width, height} = useWindowDimensions();

  const styles = useStyle<IOverlayStyle>(
    {
      container: {
        position: 'absolute',
        width,
        height,
        zIndex: 2,
      },
    },
    [width, height],
  );

  return (
    <BlurView
      style={styles.container}
      blurType="light"
      blurAmount={5}
      reducedTransparencyFallbackColor="white"
    />
  );
};

export default Overlay;
