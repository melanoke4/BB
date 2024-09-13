import React from 'react';
import ItemCard from './ItemCard';

const ItemList = ({ items, navigateTo }) => (
  <div className="row">
    {items.map((item) => (
      <div key={item.id} className="col-md-4 mb-4">
        <ItemCard item={item} navigateTo={navigateTo} />
      </div>
    ))}
  </div>
);

export default ItemList;