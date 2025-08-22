import React from "react";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { asyncregisteruser } from "../frontstore/actions/userAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const { register, handleSubmit,reset } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const RegisterHandler = (user) => {
        user.id = nanoid();
        user.isAdmin = false;
        dispatch(asyncregisteruser(user));
        navigate("/login");
        reset();
    }

  return (
    <form onSubmit={handleSubmit(RegisterHandler)}>
      <input {...register("username")} type="text" placeholder="Username" />
      <input {...register("email")} type="email" placeholder="Email" />
      <input {...register("password",{required:true})} type="password" placeholder="password" />
      <button type="submit">Register User</button>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </form>
  );
};

export default Register;
