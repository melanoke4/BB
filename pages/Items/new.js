import React from 'react';
import ItemForm from '../../components/ItemForm';
import { useAuth } from '../../utils/context/authContext';

export default function newItem() {
  const { user } = useAuth();
  return (
    <ItemForm userId={user.id} />
  );
}
