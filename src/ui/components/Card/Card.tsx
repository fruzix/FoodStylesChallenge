import React, {useEffect, useMemo, useRef} from 'react';
import {
  Animated,
  Image,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import Box from '../Box';
import ActionButton from '../ActionButton';

import useStyle from '@Framework/hooks/useStyle';
import useAppTheme from '@Framework/hooks/useTheme';

import {CLOSE, DELETE, DUPLICATE, OPTIONS, SHARE} from '@App/assets/icons';

interface ICard {
  text: string;
  onOptionsPress(): void;
  onDeletePress(): void;
  onDuplicatePress(): void;
  onSharePress(): void;
  openMenu: boolean;
  showOptions: boolean;
}

interface ICardStyles {
  container: ViewStyle;
  actionsButtonsContainer: ViewStyle;
  label: TextStyle;
  addToTop: ViewStyle;
}

const Card = ({
  text,
  onOptionsPress,
  onDeletePress,
  showOptions,
  onDuplicatePress,
  onSharePress,
}: ICard) => {
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
      zIndex: showOptions ? 10 : 0,
    },
    label: {
      maxWidth: '80%',
    },
    actionsButtonsContainer: {
      justifyContent: 'flex-end',
    },
    addToTop: {
      zIndex: 7,
    },
  });

  const opacityRef = useRef(new Animated.Value(0)).current;
  const translateYRef = useRef(new Animated.Value(0)).current;

  const animations = useMemo(
    () => [
      Animated.spring(translateYRef, {
        toValue: showOptions ? -5 : -5,
        friction: 8,
        useNativeDriver: true,
      }),
      Animated.spring(opacityRef, {
        toValue: showOptions ? 1 : 0,
        friction: 8,
        useNativeDriver: true,
      }),
    ],
    [showOptions, translateYRef, opacityRef],
  );

  useEffect(() => {
    Animated.parallel(animations).start();
  }, [showOptions, animations]);

  return (
    <Box style={styles.addToTop}>
      <Box
        px={spacing.m18}
        py={spacing.m14}
        mb={spacing.m12}
        style={styles.container}>
        <Box style={styles.label}>
          <Text>{text}</Text>
        </Box>
        <TouchableOpacity onPress={onOptionsPress}>
          <Image source={showOptions ? CLOSE : OPTIONS} />
        </TouchableOpacity>
      </Box>
      {showOptions ? (
        <Animated.View
          style={{
            opacity: opacityRef,
          }}>
          <Animated.View
            style={[
              styles.actionsButtonsContainer,
              {
                transform: [{translateY: translateYRef}],
              },
            ]}>
            <ActionButton onPress={onDeletePress} source={DELETE} />
            <ActionButton onPress={onDuplicatePress} source={DUPLICATE} />
            <ActionButton onPress={onSharePress} source={SHARE} />
          </Animated.View>
        </Animated.View>
      ) : null}
    </Box>
  );
};

export default Card;
