import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../utils/context/authContext';
import { api } from '../utils/api';
import styles from '../styles/ItemForm.module.css';

const ItemForm = ({ itemId, userId }) => {
  const router = useRouter();
  const user = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    cost: '',
    purchase_date: '',
    location: '',
    status: '',
    image_url: '',
    categories: [],
    lore: { content: '' },
    review: { content: '' },
    user_id: userId,
  });
  const [imageFile, setImageFile] = useState(null);
  const [locations, setLocations] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [imageUploadMethod, setImageUploadMethod] = useState('url');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [locationsRes, statusesRes, categoriesRes] = await Promise.all([
          api.get('/locations'),
          api.get('/statuses'),
          api.get('/categories'),
        ]);
        console.log('Locations:', locationsRes.data);
        console.log('Statuses:', statusesRes.data);
        setLocations(locationsRes.data);
        setStatuses(statusesRes.data);
        setCategories(categoriesRes.data);

        // Set initial values for location and status if available
        if (locationsRes.data.length > 0) {
          setFormData((prev) => ({ ...prev, location: locationsRes.data[0].id.toString() }));
        }
        if (statusesRes.data.length > 0) {
          setFormData((prev) => ({ ...prev, status: statusesRes.data[0].id.toString() }));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (itemId) {
      const fetchItem = async () => {
        try {
          const response = await api.get(`/items/${itemId}?user_id=${userId}`);
          setFormData(response.data);
        } catch (error) {
          console.error('Error fetching item:', error);
        }
      };
      fetchItem();
    }
  }, [itemId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'lore' || name === 'review') {
      value = { content: value };
    }
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      categories: checked
        ? [...prevState.categories, parseInt(value)]
        : prevState.categories.filter((id) => id !== parseInt(value)),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (itemId) {
        response = await api.put(`/items/${itemId}`, formData);
      } else {
        response = await api.post('/items', formData);
      }
      router.push('/inventory');
    } catch (error) {
      console.error('Error submitting form:', error.response ? error.response.data : error);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setFormData((prevState) => ({
      ...prevState,
      image_url: '', // Clear the URL when a file is uploaded
    }));
  };

  return (
    <div className={styles.formContainer}>
    <h2 className={styles.formTitle}>Add A New Item</h2>
    <form onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
      <label className={styles.label} htmlFor="name">Name:</label>
          <input
            className={styles.input}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Image Upload Method:</label>
          <select
            className={styles.select}
            value={imageUploadMethod}
            onChange={(e) => setImageUploadMethod(e.target.value)}
          >
            <option value="url">URL</option>
            <option value="file">File Upload</option>
          </select>
        </div>

        {imageUploadMethod === 'url' ? (
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="image_url">Image URL:</label>
            <input
              className={styles.input}
              type="url"
              id="image_url"
              name="image_url"
              value={formData.image_url}
              onChange={handleChange}
              required
            />
          </div>
        ) : (
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="image">Upload Image:</label>
            <input
              className={styles.input}
              type="file"
              id="image"
              name="image"
              onChange={handleImageUpload}
              accept="image/*"
              required
            />
          </div>
        )}

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="cost">Cost:</label>
          <input
            className={styles.input}
            type="number"
            id="cost"
            name="cost"
            value={formData.cost}
            onChange={handleChange}
            step="0.01"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="purchase_date">Purchase Date:</label>
          <input
            className={styles.input}
            type="date"
            id="purchase_date"
            name="purchase_date"
            value={formData.purchase_date}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="location">Location:</label>
          <select
            className={styles.select}
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          >
            <option value="">Select a location</option>
            {locations.map((location) => (
              <option key={location.id} value={location.id.toString()}>{location.name}</option>
            ))}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="status">Status:</label>
          <select
            className={styles.select}
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          >
            <option value="">Select a status</option>
            {statuses.map((status) => (
              <option key={status.id} value={status.id.toString()}>{status.name}</option>
            ))}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Categories:</label>
          <div className={styles.categoriesContainer}>
            {categories.map((category) => (
              <div key={category.id}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  id={`category-${category.id}`}
                  name="categories"
                  value={category.id}
                  checked={formData.categories.includes(category.id)}
                  onChange={handleCategoryChange}
                />
                <label htmlFor={`category-${category.id}`}>{category.name}</label>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="lore">Lore:</label>
          <textarea
            className={styles.textarea}
            id="lore"
            name="lore"
            value={formData.lore.content}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="review">Review:</label>
          <textarea
            className={styles.textarea}
            id="review"
            name="review"
            value={formData.review.content}
            onChange={handleChange}
          />
        </div>

        <button className={styles.button} type="submit">Submit</button>
    </form>
    </div>
  );
};

export default ItemForm;
