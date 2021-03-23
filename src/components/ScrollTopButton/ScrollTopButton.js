import React, { useState, useEffect } from 'react';
import './ScrollTopButton.scss';
import { FaChevronUp } from 'react-icons/fa';

const ScrollTopButton = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkTopScroll = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkTopScroll);
    return () => {
      window.removeEventListener('scroll', checkTopScroll);
    };
    // eslint-disable-next-line
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!showScroll) {
    return null;
  }

  return (
    <button className='scroll-top-btn' onClick={scrollTop}>
      <FaChevronUp />
    </button>
  );
};

export default ScrollTopButton;
