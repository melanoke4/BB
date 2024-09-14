import React from 'react';
import ProfileCard from '../components/ProfileCard';
import styles from '../styles/ProfilePage.module.css';

const ProfilePage = () => {
  return (
    <div className={styles.profilePageContainer}>
      <h3 className={styles.profileTitle}>User Profile</h3>
      <ProfileCard />
    </div>
  );
};

export default ProfilePage;