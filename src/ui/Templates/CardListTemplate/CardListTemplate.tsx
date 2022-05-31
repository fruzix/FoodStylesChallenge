import React from 'react';
import {View, Text, ViewStyle} from 'react-native';

import useStyle from '@Framework/hooks/useStyle';

interface ICardListStyles {
  container: ViewStyle;
}

const CardListTemplate = () => {
  const styles = useStyle<ICardListStyles>({
    container: {
      justifyContent: 'center',
      flex: 1,
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Text>CardListTemplate</Text>
    </View>
  );
};

export default CardListTemplate;
