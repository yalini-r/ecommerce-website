import React from 'react';
import './newsltr.css';

const NewsLetter = () => {
  return (
    <div className='news-ltr'>
      <h1>Get exclusive offers on your email</h1>
      <p>Subscribe to our newsLetter and stay updated</p>
      <div className='inp-btn'>
        <input  type='email' placeholder='your email id'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter;