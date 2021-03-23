import React, { useEffect, useState } from 'react';
import './SingleItem.scss';
import { useParams } from 'react-router-dom';
import { bars, restaurants, coffeeShops } from '../../data/data';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useAppContext } from '../../context/app_context';

const data = [...restaurants, ...bars, ...coffeeShops];

const SingleItem = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { id } = useParams();

  const { favorites, addOrRemoveFavorites } = useAppContext();

  useEffect(() => {
    if (favorites.filter(item => item.id === +id).length > 0) {
      setIsFavorite(true);
    }
    //eslint-disable-next-line
  }, []);

  const handleClick = e => {
    setIsFavorite(!isFavorite);
    addOrRemoveFavorites(id);
  };

  const currentItem = data.find(item => item.id === +id);
  const { type, name, location, address } = currentItem;

  return (
    <div className='single-item-page page'>
      <div className='single-item-page-container'>
        <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
        <h3>Type: {type}</h3>
        <h3>Located in {location}</h3>
        <h3>Address: {address}</h3>
        <button onClick={handleClick}>
          {isFavorite ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
