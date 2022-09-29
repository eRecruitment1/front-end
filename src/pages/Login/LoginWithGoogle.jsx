import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { loginGoogle } from "../../services/slice/UserSlice";
import { unwrapResult } from "@reduxjs/toolkit";

const LoginWithGoogle = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleGoogleSignIn = async (user) => {
    try {
      await googleSignIn();
      console.log(user);
      const action = loginGoogle(user.accessToken);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/account');
    }
  }, [user]);

  return (
    <div>
      <div className='max-w-[240px] m-auto py-4'>
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  );
};

export default LoginWithGoogle;