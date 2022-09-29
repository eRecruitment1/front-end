import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import InputField from "../../components/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  onCancelClick: PropTypes.func,
};

function LoginForm({onSubmit, onCancelClick}) {
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

  const handleCancleClick = (values) => {
    onCancelClick(values);
  }

  return (
    <form onSubmit={form.handleSubmit(handleFormSubmit)}>
      <InputField
        name="username"
        type="text"
        label="Username"
        placeholder="eg: Username here"
        form={form}
      />
      <InputField
        name="password"
        type="password"
        label="Password"
        placeholder="Password here"
        form={form}
      />

      <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
        <button
          className="bg-blue-600 text-white active:bg-blue-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginForm;