import FilterAndSort from 'components/FilterAndSort';
import List from 'components/List';
import Pages from 'components/Pages';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideoGames, getGenres } from 'redux/actions';

const Home = () => {

  const dispatch = useDispatch()
  const {gamesList} = useSelector(state=>state)
  

  useEffect(()=>{   
        dispatch(getVideoGames())
        dispatch(getGenres())
 },[dispatch])
  
  
    return (
      <>
      <FilterAndSort />  
      <List listOfItems={gamesList}/> 
      <Pages limit={15} length={gamesList.length} ></Pages>
    </>
  );
};

export default Home;