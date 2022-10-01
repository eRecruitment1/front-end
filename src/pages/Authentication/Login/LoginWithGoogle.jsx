import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../../../context/AuthContext';
import { useDispatch } from "react-redux";
import { login } from "../../../services/slice/UserSlice";
import { unwrapResult } from "@reduxjs/toolkit";

const LoginWithGoogle = () => {
  const { googleSignIn, user } = UserAuth();
  const dispatch = useDispatch();
  const handleGoogleSignIn = async (user) => {
    let id_token;
    try {
      await googleSignIn();
      id_token = "id_token" + user.accessToken
      console.log(user.accessToken);
      const action = login(id_token);
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