import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useAuth } from '../utils/context/authContext';
import Bonfire from '../components/Bonfire';
import Instructions from '../components/Instructions';

export default function Home() {
  const { user } = useAuth();
  const router = useRouter();
  const [showInstructions, setShowInstructions] = useState(false);
  const navigateTo = (page) => {
    router.push(`/${page}`);
  };

  const handleCloseInstructions = () => {
    setShowInstructions(false);
  };

  return (
    <><div className="home text-center">
      <Bonfire
        navigateTo={navigateTo}
      />

    </div>

      <div className="m-4 text-center">
        {/* <Instructions /> */}
        <button onClick={() => setShowInstructions(true)}>Show Instructions</button>
        {showInstructions && <Instructions onClose={handleCloseInstructions} />}
        {/* <button onClick={() => setShowInstructions(true)}>Show Instructions</button>
      {showInstructions && <Instructions />} */}
      </div>
    </>
  );
}
