import React, { useState } from 'react';
import styles from '../styles/BottomlessBoxInventory.module.css';
import { useRouter } from 'next/router';

const BottomlessBoxInventory = ({ items, setItems, navigateTo }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const router = useRouter();

  return (
    <div className={styles.bottomlessBox}>
      <div className={styles.inventoryGrid}>
        {items.map((item) => (
          <div 
            key={item.id} 
            className={styles.inventoryItem}
            onClick={() => { router.push(`/items/${item.id}`); }}
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <img src={item.image_url} alt={item.name} className={styles.itemImage} />
            <div className={styles.itemInfo}>
              <span className={styles.itemName}>{item.name}</span>
              <span className={styles.itemQuantity}>x1</span>
            </div>
            {hoveredItem === item && (
              <div className={styles.itemPopup}>
                <h3>{item.name}</h3>
                <p>Cost: ${item.cost}</p>
                <p>Location: {item.location_name}</p>
                <p>Status: {item.status_name}</p>
                <p>Lore: {item.lore?.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomlessBoxInventory;