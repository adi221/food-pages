import React, { useState, useRef } from 'react';
import './Navbar.scss';
import { Link, useHistory } from 'react-router-dom';
import { FaSearch, FaRegBookmark } from 'react-icons/fa';
import { useAppContext } from '../../context/app_context';

const Navbar = () => {
  const [activeSearch, setActiveSearch] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showFavorites, setShowFavorites] = useState(false);
  const inputRef = useRef();
  const { favorites } = useAppContext();
  console.log(favorites);

  const history = useHistory();

  const handleSubmit = () => {
    if (!inputValue.trim()) return;
    let path = `/view-all/${inputValue.toLowerCase().trim()}`;
    history.push(path);
    setInputValue('');
  };

  const handleSearch = e => {
    e.preventDefault();
    if (activeSearch) handleSubmit();
    setActiveSearch(!activeSearch);
    inputRef.current.focus();
  };

  const displayList = () => {
    setShowFavorites(true);
  };
  const hideList = () => {
    setShowFavorites(false);
  };

  const handleList = e => {
    if (e.target.classList.contains('fav')) {
      displayList();
    }
  };

  return (
    <nav>
      <div className='nav-center' onMouseOver={handleList}>
        <div className='nav-header'>
          <div className='circle'></div>
          <Link to='/'>
            <h1>Food Pages</h1>
          </Link>
        </div>
        <ul className='utils'>
          <li className='utils__search'>
            <form onSubmit={handleSubmit}>
              <input
                className={`${activeSearch ? 'active-input' : ''}`}
                type='text'
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder='Search...'
                ref={inputRef}
              />
              <button
                className={`utils__search-btn ${
                  activeSearch ? 'active-input__btn' : ''
                }`}
                onClick={handleSearch}
              >
                <FaSearch />
              </button>
            </form>
          </li>

          <li className='utils__favorites fav'>
            <button
              className='utils__favorites-btn fav'
              onMouseOver={displayList}
              onMouseLeave={hideList}
            >
              <FaRegBookmark />
            </button>
            {showFavorites && (
              <div
                className='utils__favorites-list fav'
                onMouseOver={displayList}
                onMouseLeave={hideList}
              >
                {favorites.length > 0 ? (
                  <ul>
                    {favorites.map(item => {
                      const { id, type, name } = item;
                      return (
                        <li className='utils__favorites-list-item fav' key={id}>
                          <Link to={`/${type}/${id}`}>
                            <h2>{name}</h2>
                            <p>{type}</p>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <h2 className='utils__favorites-list-title fav'>
                    No favorites yet :)
                  </h2>
                )}
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
