import React, { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import ItemList from '../components/ItemList';
import { useItems } from '../hooks/useItems';
import styles from '../styles/Inventory.module.css';
import BottomlessBoxInventory from '../components/BottomlessBoxInventory';

const Inventory = ({ navigateTo }) => {
  const [itemList, setItemList] = useState([]);
  const { user } = useAuth();
  const { items, isLoading, error } = useItems(user?.id);

  useEffect(() => {
    setItemList(items);
  }, [items]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (

      <div className="container">
    <div className={styles.inventoryPage}>
      <h1 className={styles.title}>Bottomless Box</h1>
      {itemList.length > 0 ? (
        <BottomlessBoxInventory items={itemList} setItems={setItemList} navigateTo={navigateTo} />
      ) : (
        <p>No items found.</p>
      )}
    </div>
    
      <h1>My Inventory</h1>
      <ItemList items={itemList} setItems={setItemList} navigateTo={navigateTo} />
    </div>
  );
};

export default Inventory;
