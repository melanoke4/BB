import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleItem } from '../../api/items';
import { useAuth } from '../../utils/context/authContext';

export default function ViewItem() {
  const [itemDetails, setItemDetails] = useState({});
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
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
  }, [id]);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!itemDetails) return <div>No item found</div>;

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="text-white ms-5 details">
        <h5>
          {itemDetails.name} - Details
        </h5>
        <hr />
        <div className="d-flex">
          <div>
            <h7 className="fw-bold text-decoration-underline">
              Item Information
            </h7>
            <p>Name: {itemDetails.name}</p>
            <p>Cost: ${itemDetails.cost}</p>
            <p>Purchase Date: {itemDetails.purchase_date}</p>
            <p>Location: {itemDetails.location_name}</p>
            <p>Status: {itemDetails.status_name}</p>
            <p>Categories: {itemDetails.category_names?.join(', ')}</p>
            <p>Lore: {itemDetails.lore?.content}</p>
            <p>Review: {itemDetails.review_content}</p>

          </div>
        </div>
      </div>
    </div>
  );
}