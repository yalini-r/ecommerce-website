import React from 'react';
import './offers.css';
import ex_img from '../assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className='offer'>
       <div className='lft'>
        <h2>Exclusive</h2>
        <h1>Offers for you</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check now</button>

       </div>
       <div className='rgt'>
        <img src={ex_img}  alt=''/>

       </div>
    </div>
  )
}

export default Offers;