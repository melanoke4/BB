import React from 'react';
import Link from 'next/link';

const ItemCard = ({ item }) => {
  return (
    <div className="card">
      <img src={item.image_url} alt={item.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">Cost: ${item.cost}</p>
        <p className="card-text">Location: {item.location_name}</p>
        <p className="card-text">Status: {item.status_name}</p>
        <p className="card-text">Categories: {item.categories.map(cat => cat.name).join(', ')}</p>
        {item.lore && (
          <div className="card-text">
            <h6>Lore:</h6>
            <p>{item.lore}</p>
          </div>
        )}
        {item.review && (
          <div className="card-text">
            <h6>Review:</h6>
            <p>{item.review}</p>
          </div>
        )}
        <Link href={`/items/${item.id}`}>
          <a className="btn btn-primary">View Details</a>
        </Link>
      </div>
    </div>
  );
};

export default ItemCard;