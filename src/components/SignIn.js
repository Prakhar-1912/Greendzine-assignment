import React, { useState } from "react";
import logo from "../assests/logo.png";
import { database } from "./FireBaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import PopUp from "./PopUp";

const SignIn = () => {
  const [popup, setpopup] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(database, email, password)
      .then((data) => {
        console.log(data, "authData");
        navigate("/dashboard");
      })
      .catch((error) => {
        setpopup(true);
        console.log(error);
      });
  };

  return (
    <div className="login">
      <div className="login-body">
      <PopUp open={popup} onClose={()=>setpopup(false)}/>
        <div>
          <img src={logo} alt="logo" className="login-logo"/>
          <h2 className="login-heading">#We are Electric</h2>
        </div>
        <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
          <input type="text" name="email" placeholder="E-mail" />
          <input type="password" name="password" placeholder="Password" />
          <button className="login-btn">Login</button>
        </form>
        <h2 className="signup-text">
          Don't have an account yet? <Link to="/signup"> Sign up</Link>
        </h2>
        <h2 className="login-form-text">Forgot Password?</h2>
      </div>
    </div>
  );
};

export default SignIn;
