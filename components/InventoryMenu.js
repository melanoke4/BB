import React from 'react';

function InventoryMenu({ navigateTo }) {
  return (
    <div className="inventory-menu">
      <button onClick={() => navigateTo('items')}>Items</button>
      <button onClick={() => navigateTo('profile')}>Profile</button>
      <button onClick={() => navigateTo('items/new')}>Add Item</button>
      <button onClick={() => navigateTo('/')}>Return to Bonfire</button>
    </div>
  );
}

export default InventoryMenu;
