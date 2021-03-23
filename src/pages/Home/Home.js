import React from 'react';
import './Home.scss';
import { HomeHeader, Carousel } from '../../components';
import { restaurants, bars, coffeeShops } from '../../data/data';

const trendingItems = [...restaurants, ...bars, ...coffeeShops].filter(
  item => item.trending === true
);
console.log(trendingItems);

const Home = () => {
  return (
    <div className='home-page page'>
      <HomeHeader />
      <div className='home-page__main'>
        <Carousel title='Trending' cards={trendingItems} viewAll={false} />
        <Carousel title='Restaurants' cards={restaurants} />
        <Carousel title='Bars' cards={bars} />
        <Carousel title='Coffee Shops' cards={coffeeShops} />
      </div>
    </div>
  );
};

export default Home;
