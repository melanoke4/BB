import React, { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import ItemList from '../components/ItemList';
import { useItems } from '../hooks/useItems';

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
      <h1>My Inventory</h1>
      <ItemList items={itemList} setItems={setItemList} navigateTo={navigateTo} />
    </div>
  );
};

export default Inventory;
