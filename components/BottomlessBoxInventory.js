import React from 'react';
import styles from '../styles/BottomlessBoxInventory.module.css';


const BottomlessBoxInventory = ({ items, setItems, navigateTo }) => {
  return (
    <div className={styles.bottomlessBox}>
      <div className={styles.inventoryGrid}>
        {items.map((item) => (
          <div key={item.id} className={styles.inventoryItem}>
            <img src={item.image_url} alt={item.name} className={styles.itemImage} />
            <div className={styles.itemInfo}>
              <span className={styles.itemName}>{item.name}</span>
              <span className={styles.itemQuantity}>x1</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomlessBoxInventory;