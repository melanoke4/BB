import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { useRouter } from 'next/router';
import Bonfire from '../components/Bonfire';

export default function Home() {
  const { user } = useAuth();
  const router = useRouter();

  const navigateTo = (page) => {
    router.push(`/${page}`);
  };

  return (
    <div className="home text-center">
      <Bonfire 
        navigateTo={navigateTo} 
      />
  
    </div>
  );
}
