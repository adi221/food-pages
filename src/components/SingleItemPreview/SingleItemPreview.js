import React, { useState, useEffect } from 'react';
import './SingleItemPreview.scss';
import { Link } from 'react-router-dom';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useAppContext } from '../../context/app_context';

const SingleItemPreview = ({ type, name, location, averageCost, id }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { addOrRemoveFavorites, favorites } = useAppContext();

  useEffect(() => {
    if (favorites.filter(item => item.id === id).length > 0) {
      setIsFavorite(true);
    }
    //eslint-disable-next-line
  }, []);

  const handleClick = e => {
    setIsFavorite(!isFavorite);
    addOrRemoveFavorites(id);
  };

  return (
    <div className='single-item-preview'>
      <Link to={`/${type}/${id}`}>
        <h3>{name}</h3>
        <div className='details'>
          <p>{type}</p>
          <p>{location}</p>
          <p>{averageCost}</p>
        </div>
      </Link>
      <button onClick={handleClick}>
        {isFavorite ? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  );
};

export default SingleItemPreview;
