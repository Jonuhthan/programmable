import React from 'react';
import './AuthButtons.css';
import { UserAuth } from '../context/AuthContext';

const SignIn = () => {
  // destructure object
  const { googleSignIn } = UserAuth();

  // make sign-in call
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button className="sign-in" onClick={handleGoogleSignIn}>Sign In</button>
    </div>
  );
};

export default SignIn;