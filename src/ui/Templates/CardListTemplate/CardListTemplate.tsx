import React from 'react';
import {ViewStyle} from 'react-native';

import {Box, Header, Screen} from '@Ui/components';

import useStyle from '@Framework/hooks/useStyle';
import useAppTheme from '@Framework/hooks/useTheme';

interface ICardListStyles {
  container: ViewStyle;
}

const CardListTemplate = () => {
  const {} = useAppTheme();
  const styles = useStyle<ICardListStyles>({
    container: {
      justifyContent: 'center',
    },
  });

  return (
    <Screen style={styles.container}>
      <Box>
        <Header />
      </Box>
    </Screen>
  );
};

export default CardListTemplate;
