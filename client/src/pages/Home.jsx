import List from 'components/List';
import Pages from 'components/Pages';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fecthVideogames, getVideoGames } from 'redux/reducer/gameslist';

const Home = () => {

  const dispatch = useDispatch()

  const {gamesList} = useSelector(state=>state.gamesList)
  const [list, setList] = useState([])
  console.log("soy la gameList",gamesList)

  
  

  useEffect(()=>{   
   

   const getGames = async ()=>{    
    let gamesInSession  
      const tempGames = sessionStorage.getItem("gamesList")    
      
      if(tempGames === null || tempGames === undefined){
        gamesInSession =[];
      } else{
        gamesInSession =  await JSON.parse(tempGames);
        console.log("gamesInSession",gamesInSession)
      }


      if(gamesInSession.length<1){
        dispatch(fecthVideogames())
        console.log("llamado a api")
        
        

      }else{
        console.log("busco en session")
        dispatch(getVideoGames(gamesInSession))
        setList(gamesInSession)
        }
  
  }

  if(gamesList.length>=100){
    setList(gamesList)
    sessionStorage.setItem('gamesList',JSON.stringify(gamesList))
  }else  getGames()

 },[dispatch, gamesList])
  
  


  //Filter and Sort

  const sortList = (listToSort, type)=>{
    console.log("listToSort",listToSort)
    let newList
    switch(type){
      case "nameAsc":
        newList = [...listToSort].sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
        setList(newList)
        
       break;    
     case "nameDesc":
       newList = [...listToSort].sort((a, b) => (a.name > b.name ? -1 : a.name < b.name ? 1 : 0))
       setList(newList)
       break;

      case "ratingAsc":
       newList = [...listToSort].sort((a, b) => (a.rating > b.rating ? -1 : a.rating < b.rating ? 1 : 0))
       setList(newList)
       break;

       case "ratingDesc":
        newList = [...listToSort].sort((a, b) => (a.rating > b.rating ? 1 : a.rating < b.rating ? -1 : 0))
        setList(newList)
        break;
        
        default:
       setList(gamesList)
       break;       
    }            
  }

  const filterList = (listToFilter,type)=> {
    let newList
    switch(type){
      case 'games':
        newList = [...listToFilter].filter(e=>e.created === false)
        
        setList(newList)

        break;
      case 'gamesCreated':
        newList = [...listToFilter].filter(e=>e.created === true)
        setList(newList)
        break;
      default:
        setList(listToFilter)

      break;        
    }
  }


  const handleChangeSort = (e)=>{
    e.preventDefault()  
    sortList(list,e.target.value)    
  }  

  const handleChangeFilter = (e)=>{
    e.preventDefault()
    filterList(gamesList,e.target.value)

    
  }
  
  
    return (
      <>

      {list.length &&
      <> 
    
      <h1>HOLA SOY HOME</h1>

      <form action="">

      <select onChange={handleChangeSort} name="sort" id="sort">
        <option value="sort">Ordenar por:</option>
        <option value="nameAsc">Nombre Ascendente</option>
        <option value="nameDesc">Nombre Descendente</option>
        <option value="ratingAsc">Mayor Puntuación</option>
        <option value="ratingDesc">Menor Puntuación</option>
      </select>


      <select onChange={handleChangeFilter} name="filter" id="filter">
        <option value="genres">Géneros</option>
        <option value="games">Videojuegos Existentes</option>
        <option value="gamesCreated">Creados por la Comunidad</option>
      </select>
      </form>

      <List listOfItems={list}/> 
      <Pages limit='20'></Pages>   
      </> 
      }
    </>
  );
};

export default Home;