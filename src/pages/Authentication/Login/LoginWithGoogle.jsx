import React from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../../../context/AuthContext';
import { useDispatch } from "react-redux";
import { login } from "../../../redux/slice/UserSlice";
import { unwrapResult } from "@reduxjs/toolkit";

const LoginWithGoogle = () => {
  const { googleSignIn, user } = UserAuth();
  const dispatch = useDispatch();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      const action = login(user?.accessToken);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className='max-w-[240px] m-auto py-4'>
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  );
};

export default LoginWithGoogle;