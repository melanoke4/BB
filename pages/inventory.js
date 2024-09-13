import React, { useState, useEffect } from 'react';
import { useAuth } from '../utils/context/authContext';
import ItemCard from '../components/ItemCard';
import axios from 'axios';
import Link from 'next/link';

const Inventory = ({ navigateTo}) => {
  const { user } = useAuth();
  const [items, setItems] = useState([]);
  const API_URL = process.env.NEXT_PUBLIC_DATABASE_URL || 'http://localhost:8000';

  const returnToBonfire = () => {
    navigateTo('/')
  }

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await api.get(`/items?user_id=${user.id}`);
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    if (user) {
      fetchItems();
    }
  }, [user]);

  return (
    <div className="container">
      <h1>My Inventory</h1>
      <div className="row">
        {items.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <ItemCard item={item} navigateTo={navigateTo}/>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Inventory;