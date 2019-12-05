import React from 'react';
import Card from './Card';

const CardContainer = ({items, updateCartItem}) => { 
  
  const $items = () => {
    return items.map(item => {
      return <Card key={item.id} item={item} updateCartItem={updateCartItem} />
    })
  }

  return (
    <div>
      {$items()}
    </div>
  );
};

export default CardContainer;