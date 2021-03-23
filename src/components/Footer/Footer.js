import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className='footer-center'>
        <h3 className='footer-center__title'>Food Pages</h3>
        <div className='footer-center__queue'>
          <h3>About</h3>
          <p>Company</p>
          <p>Careers</p>
          <p>Contact Us</p>
        </div>
        <div className='footer-center__queue'>
          <h3>Follow Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className='footer-center__queue'>
          <h3>Legal</h3>
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
