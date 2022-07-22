import List from 'components/List';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fecthVideogames } from 'redux/reducer/gameslist';

const Home = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fecthVideogames())
  },[dispatch])

  const {gamesList} = useSelector(state=>state.gamesList)
  console.log(gamesList)

    return (
    <>
      <h1>HOLA SOY HOME</h1>
      <List listOfItems={gamesList}/>      
    </>
    );
};

export default Home;