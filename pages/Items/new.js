import React from 'react';
import ItemForm from '../../components/ItemForm';
import { useAuth } from '../../utils/context/authContext';

export default function NewItem() {
  const { user } = useAuth();
  return (
    <ItemForm userId={user.id} />
  );
}
