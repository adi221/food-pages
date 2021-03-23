import React, { useState } from 'react';
import './HomeHeader.scss';
import { FaSearch } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { WordsFading } from '../../components';

const HomeHeader = () => {
  const [inputValue, setInputValue] = useState('');
  const history = useHistory();

  const handleSubmit = () => {
    if (!inputValue.trim()) return;
    let path = `/view-all/${inputValue.toLowerCase().trim()}`;
    history.push(path);
    setInputValue('');
  };

  return (
    <div className='home-header'>
      <div className='home-header__main'>
        <img
          src='https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
          alt='food'
        />
        <div className='home-header__square'></div>
        <div className='home-header__search-wrapper'>
          <div  >
            Find <WordsFading /> in your area
          </div>
          <form className='form' onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Search..'
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
            />
            <button type='submit'>
              <FaSearch />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
