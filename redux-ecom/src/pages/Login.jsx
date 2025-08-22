import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { asyncloginuser } from "../frontstore/actions/userAction";
import { useDispatch } from "react-redux";

const Login = () => {
    const { register, handleSubmit,reset } = useForm();
    const dispatch = useDispatch();

    const LoginHandler = (user) => {
        console.log(user);
        dispatch(asyncloginuser(user))
    }

  return (
    <form onSubmit={handleSubmit(LoginHandler)}>
      <input {...register("email")} type="email" placeholder="Email" />
      <input {...register("password")} type="password" placeholder="password" />
      <button type="submit">Login</button>
      <p>Don't have an account? <Link to="/register">Register</Link></p>
    </form>
  );
};

export default Login;
