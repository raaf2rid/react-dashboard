import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../styles/login.css";

export default function Login({ handleClick }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    document.body.classList.add("login-page");

    return () => {
      document.body.classList.remove("login-page");
    };
  });

  return (
    <div className="form">
      <img className="logo" src={logo} alt="" />

      <h2>Login</h2>

      <p>Login with Email And Password</p>

      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          {...register("email", { value: "demo@gmail.com" })}
        />

        {/* include validation with required or other standard HTML validation rules */}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          {...register("password", { value: "1234567" })}
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <span>
          <input id="isChecked" type="checkbox" />
          <label htmlFor="isChecked">Keep me signed in</label>
        </span>

        <Link to="/home">
          <input type="submit" onClick={handleClick} value="Login" />
        </Link>
      </form>
    </div>
  );
}
