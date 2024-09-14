import React from 'react';
import { useRouter } from 'next/router';
import { deleteItem } from '../api/items';
import { useAuth } from '../utils/context/authContext';
import styles from '../styles/ItemCard.module.css';

const ItemCard = ({ item, items, setItems }) => {
  const router = useRouter();
  const { user } = useAuth();

  const deleteThisItem = async () => {
    if (window.confirm(`Delete ${item.name}?`)) {
      try {
        await deleteItem(item.id, user.id);
        setItems([...items.filter((i) => item.id != i.id)]);
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    }
  };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemImage}>
        <img src={item.image_url} alt={item.name} />
      </div>
      <div className={styles.itemDetails}>
        <h2 className={styles.itemName}>{item.name}</h2>
        <div className={styles.itemInfo}>
          <p><span>Cost:</span> ${item.cost}</p>
          <p><span>Location:</span> {item.location_name}</p>
          <p><span>Status:</span> {item.status_name}</p>
          <p><span>Lore:</span> {item?.lore?.content}</p>
          <p><span>Review:</span> {item?.review?.content}</p>
          <p>
            <span>{item.category_names?.length > 1 ? 'Categories:' : 'Category:'}</span>
            {item.category_names?.join(', ') || 'None'}
          </p>
        </div>
        <div className={styles.itemActions}>
          {/* <button onClick={() => router.push(`/items/${item.id}`)}>View Details</button> */}
          <button onClick={() => router.push(`/items/edit/${item.id}`)}>Edit</button>
          <button onClick={deleteThisItem}>DELETE</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
