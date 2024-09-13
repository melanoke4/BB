import { api } from '../utils/api';

export const getItems = async (userId) => {
  try {
    const response = await api.get('/items', { params: { user_id: userId } });
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};

export const createItem = async (itemData) => {
  try {
    const response = await api.post('/items', itemData);
    return response.data;
  } catch (error) {
    console.error('Error creating item:', error);
    throw error;
  }
};

export const updateItem = async (itemId, itemData) => {
  try {
    const response = await api.put(`/items/${itemId}`, itemData);
    return response.data;
  } catch (error) {
    console.error('Error updating item:', error);
    throw error;
  }
};

export const deleteItem = async (itemId) => {
  try {
    await api.delete(`/items/${itemId}`);
  } catch (error) {
    console.error('Error deleting item:', error);
    throw error;
  }
};


export const getSingleItem = async (itemId, userId) => {
    try {
      console.log('getting single item', itemId);
      const response = await api.get(`/items/${itemId}?user_id=${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching single item:', error);
      throw error;
    }
  };
