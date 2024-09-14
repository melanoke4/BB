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
        
        setItems([...items.filter(i => {
          console.log('item.id', item.id, i.id)
          return item.id != i.id})])
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
        <p className="card-text">Categories: {item.category_names?.join(', ')}</p>

        <button onClick={() => { router.push(`/items/${item.id}`) }}>View Details</button>
        <Link href={`/items/edit/${item.id}`} passHref>
          <Button variant="primary">Edit</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisItem} className="m-2">
          DELETE
        </Button>


      </div>
    </div>
  );
};

export default ItemCard;
