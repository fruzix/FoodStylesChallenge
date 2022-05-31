import {
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import Box from '../Box';
import useStyle from '@Framework/hooks/useStyle';

interface IActionButton {
  onPress(): void;
  source: ImageSourcePropType;
}

interface IActionButtonStyles {
  container: ViewStyle;
}

const ActionButton = ({onPress, source}: IActionButton) => {
  const styles = useStyle<IActionButtonStyles>(
    {
      container: {
        width: 50,
        height: 50,
        alignSelf: 'flex-end',
      },
    },
    [],
  );

  return (
    <TouchableOpacity onPress={onPress}>
      <Box style={styles.container}>
        <Image source={source} resizeMode={'contain'} />
      </Box>
    </TouchableOpacity>
  );
};

export default ActionButton;
