import List from 'components/List';
import React from 'react';
import { useSelector } from 'react-redux';

const Favorites = () => {

  const favorites = useSelector(state=>state.favorites)

    return (
    <>
      <h1>HOLA SOY FAVORITOS</h1>
      <List listOfItems={favorites}/>      
    </>
    );
};

export default Favorites;