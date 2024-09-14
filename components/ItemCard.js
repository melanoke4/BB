import React from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { deleteItem } from '../api/items';

const ItemCard = ({ item, onEdit, onUpdate }) => {
  const router = useRouter();

  const deleteThisItem = () => {
    if (window.confirm(`Delete ${item.name}?`)) {
      deleteItem(item.id).then(() => {
        if (onDelete) onDelete(item.id);
        if (onUpdate) onUpdate();
      });
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