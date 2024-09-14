import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ItemForm from '../../../components/ItemForm';
import { getSingleItem } from '../../../api/items';
import { useAuth } from '../../../utils/context/authContext';

const EditItemPage = () => {
  const [editItem, setEditItem] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuth();

  useEffect(() => {
    if (id && user) {
      getSingleItem(id, user.id) // pass the user ID to getSingleItem
        .then(setEditItem)
        .catch((error) => {
          console.error('Error fetching item:', error);
        });
    }
  }, [id, user]);

  if (!user) return <div>Please log in to edit items.</div>;
  if (!editItem) return <div>Loading...</div>;

  return (
    <div>
      {/* <h1>Edit Item</h1> */}
      <ItemForm itemId={id} obj={editItem} userId={user.id} />
    </div>
  );
};

export default EditItemPage;
