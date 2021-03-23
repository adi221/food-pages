import React from 'react';
import './Carousel.scss';
import { SingleItemPreview } from '../../components';
import { Link } from 'react-router-dom';

const Carousel = ({ title, cards, viewAll = true }) => {
  return (
    <div className='carousel'>
      <div className='carousel-header'>
        <h1 className='title'>{title}</h1>
        {viewAll && (
          <Link to={`/view-all/${title.toLowerCase()}`}>View All</Link>
        )}
      </div>
      <div className='carousel-main'>
        {cards.slice(0, 4).map(card => {
          return <SingleItemPreview key={card.id} {...card} />;
        })}
      </div>
    </div>
  );
};

export default Carousel;
