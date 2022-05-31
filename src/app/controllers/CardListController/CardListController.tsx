import React, {useState} from 'react';

import CardListTemplate from '@Ui/Templates/CardListTemplate';
import {useMutation, useQuery} from '@apollo/client';
import {CARDS_QUERY} from '@Domain/graphql/cardsData';
import {ADD_CARD} from '@Domain/graphql/addCard';

function CardListController() {
  const {loading, data} = useQuery(CARDS_QUERY);
  const [addCard] = useMutation(ADD_CARD);
  const [openMenu, setOpenMenu] = useState(false);
  const [selected, setSelected] = useState('');

  const handleAddCard = () => {
    addCard();
  };

  const handleCardPress = (id: string) => {
    setSelected(id === selected ? '' : id);
  };

  return (
    <CardListTemplate
      loading={loading}
      onAddCardPress={handleAddCard}
      onCardPress={handleCardPress}
      data={loading ? [] : data.cards}
      isMenuOpen={openMenu}
      selected={selected}
    />
  );
}

export default CardListController;
