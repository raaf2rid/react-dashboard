import React, { useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { UserContext } from "../../Contexts/UserContext";
import "../../styles/login.css";


export default function SignUp() {


  const {createUser, addDisplayName} = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({firstName, lastName, email, password}) => {
    createUser(email, password)
    .then(result=>{
      const user = result.user
      addDisplayName(firstName, lastName)
      console.log("User", user)
    })
    .catch( error => {
      console.error(error)
    })
  }


  useEffect(() => {
    document.body.classList.add("login-page");

    return () => {
      document.body.classList.remove("login-page");
    };
  });

  return (
    <div className="form">
      <img className="logo" src={logo} alt="" />

      <h2>Sign Up</h2>


      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          {...register("firstName", { required: true})}
            />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          {...register("lastName",{ required: true})}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          {...register("email",{ required: true})}
        />

        {/* include validation with required or other standard HTML validation rules */}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          {...register("password",{ required: true})}
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <span>
          <h5>
            Already have an account? <Link to="/login" style={{textDecoration : "none", color: "#ff5701"}}>Log In</Link> 
          </h5>
        </span>

        
          <input type="submit" value="Sign Up" />
        
      </form>
    </div>
  );
}
