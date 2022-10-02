import { unwrapResult } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/slice/UserSlice";
import LoginForm from "./LoginForm";
import {localStorageConfig} from "../../../test/localStorageConfig";
const Login = () => {
  const dispatch = useDispatch();
  const handleFormSubmit = async (values) => {
    try {
      
      localStorageConfig();
      const action = login(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);
      window.alert("Login successfully");
      window.location.reload();
    } catch (error) {
      window.alert("Login Failed! Please check username, password again!");
      console.log("Failed to register", error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <LoginForm onSubmit={handleFormSubmit} />
      </div>
    </>
  )
}
export default Login