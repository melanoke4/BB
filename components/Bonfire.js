// src/components/Bonfire.js
import React from 'react';
import Link from 'next/link';

function Bonfire({ isResting, setIsResting }) {
  return (
    <div>
      <h1>Welcome, Ashen One. </h1>
      <h2>Rest here, and let the fire guide your way.</h2>
      {isResting ? (
        <div>
          <Link href="/Items">
            <button>Inventory</button>
          </Link>

          <Link href="/profile">
            <button>Profile</button>
          </Link>
          
          <Link href="/add-item">
            <button>Add Item</button>
          </Link>
        </div>
      ) : (
        <button onClick={() => setIsResting(true)}>Rest at Bonfire</button>
      )}
    </div>
  );
}

export default Bonfire;