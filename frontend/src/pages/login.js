import React from "react";
import "./css/signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="signup">
      <div className="sg-container">
        <h1>Login</h1>
        <div className="sg-fields">
          <div className="input-field icon-field">
            <label htmlFor="email">Your Email</label>
            <div className="input-wrapper">
              <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
          </div>

          <div className="input-field icon-field">
            <label htmlFor="password">Your Password</label>
            <div className="input-wrapper">
              <FontAwesomeIcon icon={faLock} className="input-icon" />
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <button>Login</button>
        </div>

        <p className="login">
          Don’t have an account?{" "}
          <Link to="/signup" className="link-text">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
