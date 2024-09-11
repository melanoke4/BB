// src/components/Bonfire.js
import React, { useCallback } from 'react';
import Link from 'next/link';
import styles from './Bonfire.module.css';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Image from 'next/image';

function Bonfire({ navigateTo }) {
  const [isResting, setIsResting] = useState(false);
    
  const onMouseEnter = useCallback(() => console.warn('made it div'))

  return (
    <Container className='mt-5'>
      <h1>Welcome, Ashen One.</h1>
      <h2>Rest here, and let the fire guide your way.</h2>
      {isResting ? (
        <div>
          <button onClick={() => navigateTo('Items')}>Items</button>
          <button onClick={() => navigateTo('profile')}>Profile</button>
          <button onClick={() => navigateTo('Items/new')}>Add Item</button>
        </div>
      ) : (
        <button 
          className={`mt-3 ${styles.bonfireButton}`} 
          onClick={() => setIsResting(true)}
          onMouseEnter={onMouseEnter}
        >
          <Image
            src="/images/bonfire-darksouls.gif"
            width={200}
            height={200}
            alt="Picture of the bonfire"
            className={styles.bonfireImage}
          />
          {/* <img src="/images/bonfire-darksouls.gif" alt="Bonfire" className={styles.bonfireImage}/> */}
          <span className={styles.hoverText}>Rest at Bonfire</span>
        </button>
      )}
    </Container>
  );
}

export default Bonfire;