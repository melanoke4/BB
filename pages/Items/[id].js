import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleItem, deleteItem } from '../../api/items';
import { useAuth } from '../../utils/context/authContext';
import ItemCard from '../../components/ItemCard';
import styles from '../../styles/ViewItem.module.css';

export default function ViewItem() {
  const [itemDetails, setItemDetails] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchItem = () => {
    if (id) {
      setLoading(true);
      getSingleItem(id, user.id)
        .then((data) => {
          console.log('Item data:', data);
          setItemDetails(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching item:', error);
          setError('Failed to load item details');
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    if (id) {
      console.log('Fetching item with ID:', id);
      setLoading(true);
      getSingleItem(id, user.id)
        .then((data) => {
          console.log('Item data received:', data);
          setItemDetails(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching item:', error);
          setError('Failed to load item details');
          setLoading(false);
        });
    }
  }, [id, user.id]);

  const handleEdit = (itemId) => {
    router.push(`/items/edit/${itemId}`);
  };

  const handleDelete = (itemId) => {
    deleteItem(itemId, user.id).then(() => {
      router.push('/inventory');
    });
  };

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;
  if (!itemDetails) return <div className={styles.noItem}>No item found</div>;

  return (
    <div className={styles.viewItemContainer}>
      <h1 className={styles.pageTitle}>Item Details</h1>
      <ItemCard
        item={itemDetails}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onUpdate={fetchItem}
      />
    </div>
  );
}