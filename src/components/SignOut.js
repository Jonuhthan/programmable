import React from 'react';
import './AuthButtons.css';
import { UserAuth } from '../context/AuthContext';

const SignOut = () => {
  // destructure object
  const { googleSignOut } = UserAuth();

  // make sign-in call
  const handleGoogleSignOut = async () => {
    try {
      await googleSignOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button className="sign-in" onClick={handleGoogleSignOut}>Sign Out</button>
    </div>
  );
};

export default SignOut;