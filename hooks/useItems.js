import { useState, useEffect } from 'react';
import { api } from '../utils/api';

export const useItems = (userId) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchItems = async () => {
        try {
          const response = await api.get(`/items?user_id=${userId}`);
          console.log('API response:', response.data); // Add this line
          setItems(response.data);
        } catch (error) {
          console.error('Error fetching items:', error);
          setError(error);
        } finally {
          setIsLoading(false);
        }
      };
  
      if (userId) {
        fetchItems();
      }
    }, [userId]);
  
    return { items, isLoading, error };
  };