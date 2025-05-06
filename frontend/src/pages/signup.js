import React from 'react';
import './css/signup.css';

const Login = () => {
  return (
    <div className='signup'>
      <div className='sg-container'>
        <h1>Sign up</h1>
        <div className='sg-fields'>
          <div className='input-field'>
            <label htmlFor="name">Your Name</label>
            <input type='text' id='name' placeholder='Enter your name' />
          </div>
          <div className='input-field'>
            <label htmlFor="email">Your Email</label>
            <input type='email' id='email' placeholder='Enter your email' />
          </div>
          <div className='input-field'>
            <label htmlFor="password">Your Password</label>
            <input type='password' id='password' placeholder='Enter your password' />
          </div>
          <button>Continue</button>
        </div>
        <p className='login'>Already have an account? <span>Login here</span></p>
        <div className='agree'>
          <input type='checkbox' id='terms' />
          <label htmlFor="terms">By continuing, I agree to the terms of use & privacy</label>
        </div>
      </div>
    </div>
  );
}

export default Login;
