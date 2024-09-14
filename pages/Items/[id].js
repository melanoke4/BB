import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleItem } from '../../api/items';
import { useAuth } from '../../utils/context/authContext';
import ItemCard from '../../components/ItemCard'; // Import ItemCard

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
        .then(data => {
          console.log('Item data:', data);
          setItemDetails(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching item:', error);
          setError('Failed to load item details');
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    fetchItem();
  }, [id, user.id]);

  const handleEdit = (itemId) => {
    router.push(`/edit/${itemId}`);
  };

  const handleDelete = (itemId) => {
    deleteItem(itemId).then(() => {
      router.push('/inventory');
    });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!itemDetails) return <div>No item found</div>;
  
  // useEffect(() => {
  //   if (id) {
  //     setLoading(true);
  //     getSingleItem(id, user.id)
  //       .then(data => {
  //         console.log('Item data:', data);
  //         setItemDetails(data);
  //         setLoading(false);
  //       })
  //       .catch(error => {
  //         console.error('Error fetching item:', error);
  //         setError('Failed to load item details');
  //         setLoading(false);
  //       });
  //   }
  // }, [id, user.id]);
  
  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;
  // if (!itemDetails) return <div>No item found</div>;


return (
  <div className="mt-5 d-flex flex-wrap justify-content-center">
    <div className="text-white ms-5 details">
      <h5>{itemDetails.name} - Details</h5>
      <hr />
      <ItemCard 
        item={itemDetails} 
        onEdit={handleEdit} 
        onDelete={handleDelete}
        onUpdate={fetchItem}

      />
    </div>
  </div>
);
}