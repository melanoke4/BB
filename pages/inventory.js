import React from 'react';
import { useAuth } from '../utils/context/authContext';
import ItemList from '../components/ItemList';
import { useItems } from '../hooks/useItems';

const Inventory = ({ navigateTo }) => {
  const { user } = useAuth();
  const { items, isLoading, error } = useItems(user?.id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container">
      <h1>My Inventory</h1>
      <ItemList items={items} navigateTo={navigateTo} />
    </div>
  );
};

export default Inventory;