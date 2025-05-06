import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import ft_logo from '../assets/logo_big.png';
import itg_icon from '../assets/instagram_icon.png';
import pnt_icon from '../assets/pintester_icon.png';
import wtp_icon from '../assets/whatsapp_icon.png';

const Footer = () => {
  // Function to scroll to the top when a link is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='footer'>
      <div className='ft-logo'>
        <img src={ft_logo} alt='' height="80px"/>
        <p>SHOPPER</p>
      </div>

      <ul className='ft-links'>
        <li><Link className='lnk' to="/" onClick={scrollToTop}>Home</Link></li>   
        <li><Link className='lnk' to="/about" onClick={scrollToTop}>About</Link></li>  
        <li><Link className='lnk' to="/products" onClick={scrollToTop}>Products</Link></li>  
        <li><Link className='lnk' to="/contact" onClick={scrollToTop}>Contact</Link></li>  
        
      </ul>

      <div className='ft-social-icons'>
        <div className='ft-icons-container'>
          <img src={itg_icon} alt="" />
        </div>
        <div className='ft-icons-container'>
          <img src={pnt_icon} alt="" />
        </div>
        <div className='ft-icons-container'>
          <img src={wtp_icon} alt="" />
        </div>
      </div>

      <div className='ft-copyrgt'>
        <hr/>
        <p>Copyright @2023 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
