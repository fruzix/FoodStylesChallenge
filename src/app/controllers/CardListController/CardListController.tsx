import React, {useState} from 'react';

import CardListTemplate from '@Ui/Templates/CardListTemplate';
import {useMutation, useQuery} from '@apollo/client';
import {CARDS_QUERY} from '@Domain/graphql/cardsData';
import {ADD_CARD} from '@Domain/graphql/addCard';
import {DELETE_CARD} from '@Domain/graphql/deleteCard';
import {DUPLICATE_CARD} from '@Domain/graphql/duplicateCard';
import {Share} from 'react-native';

function CardListController() {
  const {loading, data} = useQuery(CARDS_QUERY);
  const [addCard] = useMutation(ADD_CARD, {
    refetchQueries: [CARDS_QUERY],
  });
  const [deleteCard] = useMutation(DELETE_CARD, {
    refetchQueries: [CARDS_QUERY],
  });
  const [duplicateCard] = useMutation(DUPLICATE_CARD, {
    refetchQueries: [CARDS_QUERY],
  });
  const [shareCard] = useMutation(DUPLICATE_CARD, {
    refetchQueries: [CARDS_QUERY],
  });

  const [openMenu, setOpenMenu] = useState(false);
  const [selected, setSelected] = useState('');

  const handleAddCard = () => {
    addCard();
  };

  const onShare = async (id: string) => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        shareCard({variables: {id}});
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleCardPress = (id: string) =>
    setSelected(id === selected ? '' : id);

  const handleOnDeletePress = (id: string) => deleteCard({variables: {id}});
  const handleOnSharePress = (id: string) => onShare(id);
  const handleOnDuplicatePress = (id: string) =>
    duplicateCard({variables: {id}});

  return (
    <CardListTemplate
      loading={loading}
      onAddCardPress={handleAddCard}
      onCardPress={handleCardPress}
      onDeletePress={handleOnDeletePress}
      onSharePress={handleOnSharePress}
      onDuplicatePress={handleOnDuplicatePress}
      data={loading ? [] : data.cards}
      isMenuOpen={openMenu}
      selected={selected}
    />
  );
}

export default CardListController;
function alert(message: any) {
  throw new Error('Function not implemented.');
}
