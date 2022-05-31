import React from 'react';
import {
  Image,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import Box from '../Box';

import useStyle from '@Framework/hooks/useStyle';
import useAppTheme from '@Framework/hooks/useTheme';
import {OPTIONS} from '@App/assets/icons';

interface ICard {
  text: string;
  onLongPress?(): void;
  onOptionsPress(): void;
}

interface ICardStyles {
  container: ViewStyle;
  label: TextStyle;
}

const Card = ({text, onLongPress, onOptionsPress}: ICard) => {
  const {colors, spacing} = useAppTheme();

  const styles = useStyle<ICardStyles>({
    container: {
      backgroundColor: colors.white,
      borderRadius: 7,
      flexDirection: 'row',
      justifyContent: 'space-between',
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    label: {
      maxWidth: '80%',
    },
  });

  return (
    <TouchableOpacity onLongPress={onLongPress}>
      <Box
        px={spacing.m18}
        py={spacing.m14}
        mb={spacing.m12}
        style={styles.container}>
        <Box style={styles.label}>
          <Text>{text}</Text>
        </Box>
        <TouchableOpacity onPress={onOptionsPress}>
          <Image source={OPTIONS} />
        </TouchableOpacity>
      </Box>
    </TouchableOpacity>
  );
};

export default Card;
