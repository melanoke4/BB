// pages/items/[id].js

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleItem } from '../../api/items';

export default function ViewItem() {
  const [itemDetails, setItemDetails] = useState({});
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    if (id) {
      getSingleItem(id).then(setItemDetails);
    }
  }, [id]);

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
            <p>Lore: {itemDetails.lore}</p>
          </div>
        </div>
      </div>
    </div>
  );
}