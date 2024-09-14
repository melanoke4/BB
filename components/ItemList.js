import React from 'react';
import { useRouter } from 'next/router';
import ItemCard from './ItemCard';

const ItemList = ({ items, setItems }) => {
  const router = useRouter();

  const handleEdit = (itemId) => {
    router.push(`/edit/${itemId}`);
  };

  return (
    <div className="row">
      {items.map((item) => (
        <div key={item.id} className="col-md-4 mb-4">
          <ItemCard item={item} items={items} setItems={setItems} onEdit={handleEdit} />


        </div>
      ))}
    </div>
  );
};

export default ItemList;