import React, { useContext, useState } from 'react';
import { bars, restaurants, coffeeShops } from '../data/data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  let originalData = [...bars, ...restaurants, ...coffeeShops];
  const [filteredData, setFilteredData] = useState([...originalData]);
  const [favorites, setFavorites] = useState([]);

  console.log(document.documentElement.className);

  // const addToFavorites = id => {
  //   const favoriteItem = originalData.find(item => item.id === +id);
  //   setFavorites([...favorites, favoriteItem]);
  //   console.log(favorites);
  // };

  // const removeFromFavorites = id => {
  //   const newFavorites = favorites.filter(item => item.id !== id);
  //   setFavorites(newFavorites);
  // };

  const addOrRemoveFavorites = id => {
    const clickedItem = originalData.find(item => item.id === +id);
    const tempItem = favorites.find(item => item.id === +id);

    if (tempItem) {
      const newFavorites = favorites.filter(item => item.id !== id);
      setFavorites(newFavorites);
    } else {
      setFavorites([...favorites, clickedItem]);
    }
    console.log(favorites);
  };

  const filterData = input => {
    originalData = [...bars, ...restaurants, ...coffeeShops];
    console.log(originalData);
    if (input === 'bars') return setFilteredData(bars);
    if (input === 'restaurants') return setFilteredData(restaurants);
    if (input === 'coffee shops') return setFilteredData(coffeeShops);
    const newData = originalData.filter(item =>
      item.name.toLowerCase().startsWith(input)
    );
    setFilteredData(newData);
  };

  return (
    <AppContext.Provider
      value={{ filterData, filteredData, addOrRemoveFavorites, favorites }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
