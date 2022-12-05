import List from 'components/List';
import React from 'react';
import { useSelector } from 'react-redux';

import s from './favorites.module.css'

const Favorites = () => {

  const favorites = useSelector(state=>state.favorites)
  


    return (
    <div className={s.container}>
     {favorites.length===0 && <h2>Aún no has añadido Favoritos</h2>
     }

     {favorites.length > 0 &&
      <List listOfItems={favorites}/>     
     } 
    </div>
    );
};

export default Favorites;