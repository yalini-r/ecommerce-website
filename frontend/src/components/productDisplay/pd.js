import {React, useContext }from 'react';
import './pd.css';
import star_icon from '../assets/star_icon.png';
import star_dull_icon from '../assets/star_dull_icon.png';
import { ShopContext } from '../../context/shopContext';

const ProductDisplay= (props) => {
    const {product} = props;
   const {addToCart} = useContext(ShopContext);

  return (
    <div className='pd'>

     <div className='lft'>

         <div className='pd-img-list'>
             <img src={product.image} alt="" />
             <img src={product.image} alt="" />
             <img src={product.image} alt="" />
             <img src={product.image} alt="" />
            
          </div>

          <div className='pd-img'>
             <img className='pd-main-img' src={product.image} alt='' />
          </div>

     </div>

     <div className='rgt'>
          <h1>{product.name}</h1>
          <div className='pd-rgt-star'>
            <img src={star_icon} alt='' />
            <img src={star_icon} alt='' />
            <img src={star_icon} alt='' />
            <img src={star_icon} alt='' />
            <img src={star_dull_icon} alt='' />
            <p>(122)</p>
          </div>
          <div className='pd-rgt-prices'>
            <div className='pd-price-old'>
                ${product.old_price}
            </div>
            <div className='pd-price-new'>
                ${product.new_price}
            </div>
          </div>
          <div className='pd-descrpt'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut earum est neque aperiam, corporis magni voluptatibus autem, enim quis rerum pariatur ad. 
           </div>

           <div className='pd-size'>
            <h1>Select Size</h1> 
            <div className='pd-sizes'>
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
                
            </div>
           </div>
           <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
           <div className='pd-ctg'> 
           <p >
            <span><b>Category:</b> <span> Women , T-Shirt ,Crop Top</span>   </span>
           </p>
           <p >
            <span><b>Tags:</b><span>Mordern ,Latest</span>   </span>
           </p>
           </div>
          
     </div>
      
    </div>
  )
}

export default ProductDisplay;