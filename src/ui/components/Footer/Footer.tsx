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
import {ADD} from '@App/assets/icons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface IFooter {
  text: string;
  onFooterPress(): void;
}

interface IFooterStyles {
  container: ViewStyle;
  containerButton: ViewStyle;
  label: TextStyle;
}

const Footer = ({text, onFooterPress}: IFooter) => {
  const {colors, spacing} = useAppTheme();
  const insets = useSafeAreaInsets();

  const styles = useStyle<IFooterStyles>({
    container: {
      position: 'absolute',
      bottom: 0,
      paddingHorizontal: spacing.m18,
      paddingBottom: insets.bottom + spacing.m14,
      width: '100%',
      backgroundColor: colors.white,
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
    },
    containerButton: {
      position: 'absolute',
      width: '100%',
      backgroundColor: colors.white,
      paddingHorizontal: spacing.m18,
      paddingVertical: spacing.m12,
      borderRadius: 7,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      transform: [{translateY: -40}],
    },
    label: {
      maxWidth: '80%',
    },
  });

  return (
    <Box style={styles.container}>
      <TouchableOpacity onPress={onFooterPress}>
        <Box style={styles.containerButton}>
          <Box style={styles.label}>
            <Text>{text}</Text>
          </Box>
          <Image source={ADD} />
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

export default Footer;
