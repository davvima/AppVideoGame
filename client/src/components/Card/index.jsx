// import React, { useEffect, useRef, useState } from 'react';

// import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import Genres from 'components/Genres';
import { Link } from 'react-router-dom';

import s from './card.module.css'
import placeholder from 'media/placeholder.jpg'


function Card({name,id, rating, img, genres}) {

    // const favorites = useSelector(state=>state.favorites)
    // const dispatch = useDispatch()


    // let isInFav= favorites.find(e=> {
    //     return e.id === id
    // })
    

    const handleClick = (id)=>{
        // if(!isInFav){
        //     isInFav = true
        //     dispatch(addVideoGame({
        //         name,
        //         id,
        //         rating,
        //         img
        //     }            
        //     ))
        // }else {
        //     isInFav = false
        //     dispatch(removeVideoGame(id))
        // }
    }

    // const [isHovered, setIsHovered] = useState(false);
    // const [videoKey,  setVideoKey] = useState()
    // const iframeRef = useRef(null);


    // useEffect(() => {
    //     const getTrailer = async () => {
    //         const res = await tmdbApi.getVideos(category, id);
    //         if(res.results[0]) setVideoKey(res.results[0].key);
    //     }
    //     getTrailer();
        
    // },[id,category]);

    // const trailerPath = apiConfig.videos(videoKey)


    return (  
        <>  

         {/* <img src={img} 
         className={s.poster}
         alt="poster"
         style={{ display:isHovered?'none':'block'}}
         /> */}

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
                  
                        
                 <div className="desc">
                    {rating}
                 </div>
                 </Link>
                 
                 
                 <button onClick={()=>handleClick(id)}>Fav</button>  
             </div>
           </>
            )}
       </> 
    );
};

export default Card;