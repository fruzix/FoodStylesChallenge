import React from 'react';
import {FlatList, ViewStyle} from 'react-native';

import {Box, Card, Footer, Header, Screen} from '@Ui/components';

import useStyle from '@Framework/hooks/useStyle';
import useAppTheme from '@Framework/hooks/useTheme';

interface ICardListTemplate {}
interface ICardListStyles {
  container: ViewStyle;
  header: ViewStyle;
  contentContainer: ViewStyle;
}

const CardListTemplate = ({}: ICardListTemplate) => {
  const {spacing} = useAppTheme();
  const styles = useStyle<ICardListStyles>({
    container: {
      justifyContent: 'center',
    },
    header: {position: 'absolute', top: 0},
    contentContainer: {
      paddingHorizontal: spacing.m18,
      paddingBottom: 80,
    },
  });

  const renderItem = ({item}) => {
    return <Card text={item.text} />;
  };

  const ListHeaderComponent = <Box style={{height: 120}} />;
  return (
    <Screen style={styles.container}>
      <Box style={styles.header}>
        <Header />
      </Box>
      <Box style={{height: '100%'}}>
        <FlatList
          ListHeaderComponent={ListHeaderComponent}
          contentContainerStyle={styles.contentContainer}
          data={[
            {
              id: 1,
              text: 'Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor,  Lorem ipsum dolor',
            },
            {
              id: 1,
              text: 'Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor,  Lorem ipsum dolor',
            },
            {
              id: 1,
              text: 'Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor,  Lorem ipsum dolor',
            },
          ]}
          renderItem={renderItem}
        />
      </Box>
      <Footer text={'New Food Style'} onFooterPress={() => {}} />
    </Screen>
  );
};

export default CardListTemplate;
