import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { filterGenre } from 'redux/actions';

//STYLES
import s from './genres.module.css'

const Genres = ({listOfGenres,all}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleOnClick = (e)=>{
        e.preventDefault()
        dispatch(filterGenre(e.target.name))
        navigate('/inicio')

    }
    return (
        <div>
            {all &&<button className={s.button} name= 'All' onClick={handleOnClick}>Todos</button>
            }
            
            {
                listOfGenres.map((e,idx)=>(
                    <button className={s.button} name={e.name?e.name:e} onClick={handleOnClick} key={idx}>{e.name?e.name:e}</button>
                ))
            }
            
        </div>
    );
};

export default Genres;