import React from 'react';
import styles from './Instructions.module.css';

const Instructions = ({ onClose }) => {
  const handleContainerClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.instructionsContainer} onClick={handleContainerClick}>
      <div className={styles.instructionsContent}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h2 className={styles.title}>How to Use Your Bottomless Box</h2>
        <ol className={styles.list}>
          <li>
            <strong>Rest at the Bonfire:</strong> To access your Bottomless Box, find a bonfire and rest. This will open your inventory management screen.
          </li>
          <li>
            <strong>View Inventory:</strong> Once rested, you can browse through all the items in your Bottomless Box.
          </li>
          <li>
            <strong>Add New Item:</strong> To add a new item to your Bottomless Box, click the "Add Item" button. Fill out the required fields.
          </li>
          <li>
            <strong>Edit Items:</strong> To modify an existing item, click on the item and then select the "Edit" option. You can update any of the item's details.
          </li>
          <li>
            <strong>Assign Categories:</strong> When adding or editing an item, you can assign it to one or more categories. This helps organize your inventory.
          </li>
          <li>
            <strong>Set Status and Location:</strong> For each item, you can set its current status (e.g., New, Used, Broken) and location (e.g., Firelink Shrine, Undead Burg).
          </li>
          <li>
            <strong>Add Lore:</strong> Enhance your items by adding lore. This can include the item's history, significance, or any interesting facts.
          </li>
          <li>
            <strong>Write a Review:</strong> After using an item, you can add a personal review. Share your thoughts on its effectiveness or any memorable experiences.
          </li>
        </ol>
        <p className={styles.footer}>May the flames guide thee, Ashen One.</p>
      </div>
    </div>
  );
};

export default Instructions;
