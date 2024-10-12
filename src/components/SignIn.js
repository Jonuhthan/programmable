import React, { useEffect } from 'react';
import './AuthButtons.css';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  // destructure object
  const { user, googleSignIn } = UserAuth();
  // navigate instance
  const navigate = useNavigate();

  // make sign-in call
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  // after signing in and validating user, redirect them to problem home page
  useEffect(() => {
    if (user != null) {
      // URI user is taken to, similar to next router
      navigate("/home");
    }
  }, [user]);

  return (
    <div>
      <button className="sign-in" onClick={handleGoogleSignIn}>Sign In</button>
    </div>
  );
};

export default SignIn;