import React from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { deleteItem } from '../api/items';
import { useAuth } from '../utils/context/authContext';

const ItemCard = ({ item, items, setItems }) => {
  const router = useRouter();
  const { user } = useAuth();

  const deleteThisItem = async () => {
    if (window.confirm(`Delete ${item.name}?`)) {
      try {
        await deleteItem(item.id, user.id);

        setItems([...items.filter((i) => {
          console.log('item.id', item.id, i.id);
          return item.id != i.id;
        })]);
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    }
  };

  return (
    <div className="card">
      <img src={item.image_url} alt={item.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">Cost: ${item.cost}</p>
        <p className="card-text">Location: {item.location_name}</p>
        <p className="card-text">Status: {item.status_name}</p>
        <p className="card-text">Lore: {item?.lore?.content}</p>
        <p className="card-text">Review: {item?.review?.content}</p>
        {/* <p className="card-text">Categories: {item.category_names?.join(', ')}</p> */}
        <p className="card-text">
          {item.category_names && item.category_names.length > 0 ? (
            <>
              {item.category_names.length === 1 ? 'Category: ' : 'Categories: '}
              {item.category_names.join(', ')}
            </>
          ) : 'No categories'}
        </p>
        <button onClick={() => { router.push(`/items/${item.id}`); }} className="m-1">View Details</button>
        <button onClick={() => { router.push(`/items/edit/${item.id}`); }} className="m-1">Edit</button>
        <button onClick={deleteThisItem} className="m-1">DELETE</button>

      </div>
    </div>
  );
};

export default ItemCard;
