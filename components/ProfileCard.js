import React, { useState, useEffect } from 'react';
import { useAuth } from '../utils/context/authContext';
import { api } from '../utils/api';
import styles from '../styles/ProfileCard.module.css';

const ProfileCard = () => {
  const { user } = useAuth();
  const [itemCount, setItemCount] = useState(0);
  

  // useEffect(() => {
  //   const fetchItemCount = async () => {
  //     try {
  //       const response = await api.get(`/items/count?user_id=${user.id}`);
  //       setItemCount(response.data.count);
  //     } catch (error) {
  //       console.error('Error fetching item count:', error);
  //     }
  //   };

  //   fetchItemCount();
  // }, [user.id]);

  return (
    <div className={styles.profileCard}>
      <div className={styles.imageContainer}>
        {user.imageUrl ? (
          <img src={user.imageUrl} alt="Profile" className={styles.profileImage} />
        ) : (
          <div className={styles.defaultImage}>
            <span>No Image</span>
          </div>
        )}
      </div>
      <div className={styles.userInfo}>
        <h2 className={styles.username}>{user.username}</h2>
        <p className={styles.email}>{user.email}</p>
        {/* <p className={styles.itemCount}>Items: {itemCount}</p> */}
      </div>
    </div>
  );
};

export default ProfileCard;