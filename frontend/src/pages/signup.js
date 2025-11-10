import React from "react";
import "./css/signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup">
      <div className="sg-container">
        <h1>Sign Up</h1>
        <div className="sg-fields">
          <div className="input-field icon-field">
            <label htmlFor="name">Your Name</label>
            <div className="input-wrapper">
              <FontAwesomeIcon icon={faUser} className="input-icon" />
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
          </div>

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

          <button>Continue</button>
        </div>

        <p className="login">
          Already have an account?{" "}
          <Link to="/login" className="link-text">
            Login here
          </Link>
        </p>

        <div className="agree">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            By continuing, I agree to the terms of use & privacy
          </label>
        </div>
      </div>
    </div>
  );
};

export default Signup;
