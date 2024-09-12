import { useRouter } from 'next/router';
import ItemForm from '../../../components/ItemForm';

const EditItemPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Edit Item</h1>
      {id && <ItemForm itemId={id} />}
    </div>
  );
};

export default EditItemPage;