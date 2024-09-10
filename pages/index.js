import { Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Bonfire from '../components/Bonfire';

export default function Home() {
  const { user } = useAuth();
  const router = useRouter();
  const [isResting, setIsResting] = useState(false);

  const navigateTo = (page) => {
    router.push(`/${page}`);
  };

  return (
    <div className="home text-center">
      <Bonfire 
        navigateTo={navigateTo} 
        isResting={isResting} 
        setIsResting={setIsResting} 
      />
      {/* <div className="text-center">
        <h1>Hello {user.fbUser.displayName}! </h1>
        <p>Click the button below to logout!</p>
        <Button variant="danger" type="button" size="lg" className="copy-btn" onClick={signOut}>
          Sign Out
        </Button>
      </div> */}
    </div>
  );
}