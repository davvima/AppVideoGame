import Genres from 'components/Genres';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGenres, sortList, filterList } from 'redux/actions';

//STYLES
import s from './filterAndSort.module.css'

const FilterAndSort = () => {
    const dispatch = useDispatch()
    const { genres } = useSelector(state=>state)
    
  
    useEffect(()=>{   
          dispatch(getGenres())
   },[dispatch])
  
  
    const handleChangeSort = (e)=>{
      e.preventDefault()  
      dispatch(sortList(e.target.value))
    }  
  
    const handleChangeFilter = (e)=>{
      e.preventDefault()
      dispatch(filterList(e.target.value))    
    }

    return (
        <div className={s.container}>
         <form className={s.form} action="">
                <select onChange={handleChangeSort} name="sort" id="sort">
                <option value="sort">Ordenar por:</option>
                <option value="nameAsc">Nombre Ascendente</option>
                <option value="nameDesc">Nombre Descendente</option>
                <option value="ratingAsc">Mayor Puntuación</option>
                <option value="ratingDesc">Menor Puntuación</option>
                </select>


                <select onChange={handleChangeFilter} name="filter" id="filter">
                <option value="all">Todos</option>
                <option value="games">Videojuegos Existentes</option>
                <option value="created">Creados por la Comunidad</option>
                </select>
            </form>

            <Genres listOfGenres={genres} all={true}/>
    </div>

    );
};

export default FilterAndSort;