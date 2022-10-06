import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import InputField from "../../../components/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm({ onSubmit, onCancelClick }) {
  const schema = yup
    .object({
      username: yup.string().required("Please enter title"),
      password: yup.string().required("Please enter title"),
    })
    .required();

  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (values) => {
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(handleFormSubmit)}>
      <InputField
        name="username"
        type="text"
        label="Username"
        placeholder="Enter Username"
        form={form}
      />
      <InputField
        name="password"
        type="password"
        label="Password"
        placeholder="Enter Password"
        form={form}
      />
      <div className="flex justify-between items-center mb-6 mt-2">
        <div className="form-group form-check">
          <input type="checkbox"
            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
             />
            <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2">Remember me</label>
        </div>
        <a href="/"
          className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Forgot
          password?</a>
      </div>
      <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
        <button
          className="bg-blue-600 text-white active:bg-blue-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Login
        </button>
      </div>
      <p className="text-gray-800 text-center">
        Not a member? <a href="/"
        className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Register</a>
      </p>
    </form>
    
  );
}

export default LoginForm;