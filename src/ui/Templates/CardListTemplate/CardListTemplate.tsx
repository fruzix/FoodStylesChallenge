import React, {useRef} from 'react';
import {
  ActivityIndicator,
  Animated,
  FlatList,
  ListRenderItem,
  ViewStyle,
} from 'react-native';

import {Box, Card, Footer, Header, Overlay, Screen} from '@Ui/components';
import {ICard} from '@Domain/models/Card';

import useStyle from '@Framework/hooks/useStyle';
import useAppTheme from '@Framework/hooks/useTheme';

interface ICardListTemplate {
  data: ICard[];
  loading: boolean;
  onAddCardPress(): void;
  onCardPress(id: string): void;
  onDeletePress(id: string): void;
  isMenuOpen: boolean;
  selected: string;
}
interface ICardListStyles {
  container: ViewStyle;
  header: ViewStyle;
  contentContainer: ViewStyle;
}

const CardListTemplate = ({
  data,
  onAddCardPress,
  onCardPress,
  loading,
  isMenuOpen,
  selected,
  onDeletePress,
}: ICardListTemplate) => {
  const {spacing, colors} = useAppTheme();
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

  const renderItem: ListRenderItem<ICard> = ({item: {id, name}}) => {
    const showActionButtons = id === selected;

    return (
      <Card
        showOptions={showActionButtons}
        openMenu={isMenuOpen}
        onDeletePress={() => onDeletePress(id)}
        onOptionsPress={() => onCardPress(id)}
        text={name}
      />
    );
  };

  const ListHeaderComponent = <Box style={{height: 120}} />;

  return (
    <Screen style={styles.container}>
      <Box style={styles.header}>
        <Header />
      </Box>
      <Box style={{height: '100%'}}>
        {loading ? (
          <Box>
            <ActivityIndicator size={'small'} color={colors.primary} />
          </Box>
        ) : (
          <FlatList
            ListHeaderComponent={ListHeaderComponent}
            contentContainerStyle={styles.contentContainer}
            data={data}
            renderItem={renderItem}
          />
        )}
      </Box>
      <Footer text={'New Food Style'} onFooterPress={onAddCardPress} />
      {isMenuOpen ? <Overlay /> : null}
    </Screen>
  );
};

export default CardListTemplate;
