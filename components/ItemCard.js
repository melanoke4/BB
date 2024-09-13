import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const ItemCard = ({ item }) => {
  const router = useRouter();

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



        {/* <p className="card-text">Categories: {item.categories.map(cat => cat.name).join(', ')}</p>
        {item.lore && item.lore.content && (
  <div className="card-text">
    <h6>Lore:</h6>
    <p>{item.lore.content}</p>
  </div>
)}
{item.review && (
  <div className="card-text">
    <h6>Review:</h6>
    <p>{typeof item.review === 'object' ? item.review.content : item.review}</p>
  </div>
)} */}
          <button onClick={() => { router.push(`/items/${item.id}`) }}>View Details</button>

        
      </div>
    </div>
  );
};

export default ItemCard;