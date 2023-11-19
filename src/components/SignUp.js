import React from 'react'
import logo from "../assests/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { database } from "./FireBaseConfig";
import {createUserWithEmailAndPassword} from 'firebase/auth'

const SignUp = () => {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
  
      createUserWithEmailAndPassword(database,email,password).then(data=>{
        console.log(data,"authData");
        navigate('/dashboard')
      }).catch(error=>{console.log(error,"error")});
    }

  return (
    <div className="login">
      <div className="login-body">
        <div>
          <img src={logo} alt="logo" className="login-logo" />
          <h2 className="login-heading">#We are Electric</h2>
        </div>
        <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
          <input type="text" name="email" placeholder="E-mail" />
          <input type="password" name="password" placeholder="Password" />
          <button className="login-btn">SignUp</button>
        </form>
        <h2 className="login-form-text">Already have an account? <Link to='/'> Sign In</Link></h2>
      </div>
    </div>
  )
}

export default SignUp