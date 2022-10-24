import React, { useEffect, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { UserContext } from "../../Contexts/UserContext";
import "../../styles/login.css";


export default function Login() {
  
  const {signIn} = useContext(UserContext)
  const [loginData, setLoginData] = useState({email: "", password: ""})

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  

  const onSubmit = ({email, password}) => {
    signIn(email, password)
    .then(result=>{
      const user = result.user
      console.log("User", user)
    })
    .catch( error => {
      console.error(error)
    })
  }

  function handleChange(e){
    setLoginData(prevFormData => {
      return {
          ...prevFormData,
          [e.target.name]: e.target.value
      }
  })
  console.log(loginData)
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

      <h2>Login</h2>

      <p>Login with Email And Password</p>

      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name= "email"
          {...register("email" , { required: true, onChange: e => {handleChange(e)}})}
        />

        {/* include validation with required or other standard HTML validation rules */}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          name= "password"
          {...register("password" , { required: true, onChange: e => {handleChange(e)}})}
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <span>
          <input id="isChecked" type="checkbox" />
          <label htmlFor="isChecked">Keep me signed in</label>
        </span>

        <span>
          <h5>
            Don't have an account? <Link to="/signup" style={{textDecoration : "none", color : "#ff5701"}}>Sign Up</Link> 
          </h5>
        </span>
        
    

          {loginData.email && loginData.password ? <Link to="/">
          <input type="submit" value="Login" />
          </Link> : <input type="submit" value="Login" />}

        
      </form>
    </div>
  );
}
