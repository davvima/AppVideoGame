// import React, { useEffect, useRef, useState } from 'react';

// import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Genres from 'components/Genres';
import { Link } from 'react-router-dom';

import s from './card.module.css'
import placeholder from 'media/placeholder.jpg'
import { addFavorites, removeFavorites } from 'redux/actions';


function Card({name,id, rating, img, genres}) {

    const favorites = useSelector(state=>state.favorites)
    const dispatch = useDispatch()


    let isInFav= favorites.find(e=> {
        return e.id === id
    })
    

    const handleClick = (id)=>{
        if(!isInFav){
            isInFav = true
            dispatch(addFavorites({
                name,
                id,
                rating,
                img,
                genres
            }            
            ))
        }else {
            isInFav = false
            dispatch(removeFavorites(id))
        }
    
    }

    return (  
        <>  

         {name && genres && (
            <>             
             <div className={s.card}>
                 <Link to={`/detalle/${id}`} > 
                     <img src={img?img:placeholder} alt="poster"
                         className={s.poster} 
                        />      
                     <div className={s.info}>
                         <div className="title">                    
                             <h4>{name}</h4>
                             <Genres listOfGenres={genres} />
                         </div>
                     </div>
                 </Link>
                 
                 
                 <button className ={s.button} onClick={()=>handleClick(id)}> 
                     <i className={isInFav?"fa fa-heart":"fa fa-heart-o"} aria-hidden="true" /> 
                 </button>  
             </div>
           </>
            )}
       </> 
    );
};

export default Card;