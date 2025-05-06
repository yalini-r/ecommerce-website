import React from 'react';
import './hero.css';
import hand_icon from '../assets/hand_icon.png';
import arrow_icon from '../assets/arrow.png';
import hero_img from '../assets/hero_image.png';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
      // Navigate to the correct ShopCategory page
      const handleExploreMore = () => {
        
          navigate('/products');
        
      };
  return (
    <div className='hero'>

        <div className='left'>
             <h2>NEW ARRIVALS ONLY</h2>
             <div>
                <div className='hero-hand-icon'>
                    <p>new</p>
                    <img src={ hand_icon}  alt=""/>
                   
                </div>
                <p>collections</p>
                <p>for everyone</p>
             </div>
             <div className='hero-latest-btn'>
               <div onClick={handleExploreMore}>Latest Collection</div>
               <img src={arrow_icon} alt=" " /> 
             </div>
        </div>
        
        <div className='right'>
           <img src={hero_img}  alt=""/>
        </div>
         
    </div>
  )
}

export default Hero;