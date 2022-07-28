// import React, { useEffect, useRef, useState } from 'react';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addVideoGame, removeVideoGame } from 'redux/reducer/favorites';

import './card.css'


function Card({name,id, rating, img}) {

    const favorites = useSelector(state=>state.favorites)
    const dispatch = useDispatch()

    let isInFav= favorites.find(e=> {
        return e.id === id
    })
    

    const handleClick = (id)=>{
        if(!isInFav){
            isInFav = true
            dispatch(addVideoGame({
                name,
                id,
                rating,
                img
            }            
            ))
        }else {
            isInFav = false
            dispatch(removeVideoGame(id))
        }
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

    //  <div
    //  className='posterCard'
    //  onMouseEnter={() => setIsHovered(true)}
    //  onMouseLeave={() => setIsHovered(false)}
    //     >     

    //      <img src={`https://image.tmdb.org/t/p/w500/${path}`}
    //      alt="poster"
    //      className='poster'
    //      style={{ display:isHovered?'none':'block'}}
    //      />

    //      {isHovered && (
            <div>
                {/* {!videoKey && */}
                <img src={img} alt="poster"
                className='poster' />                
                {/* }
                {videoKey && */}

                 {/* <iframe
                src={path}
                // ref={iframeRef}
                width="100%"
                title="video"                
            ></iframe> */}
                {/* } */}

                 
             <div className="itemInfo">
             <Link to={`/detalle/${id}`} >  
                 <span className='name'>{name}</span>
                 </Link> 
                 <div className="icons">
                     {/* <PlayArrow className="icon" />
                     <Add className="icon" />
                     <ThumbUpAltOutlined className="icon" />
                     <ThumbDownOutlined className="icon" /> */}
                  </div>
                 <div className="itemInfoTop">
                     <span>1 hour 14 mins</span>
                     <span className="limit">+16</span>
                     <span>1999</span>
                 </div>
                 <div className="desc">
                     {rating}
                 </div>
                 <div className="genre">Action</div>
                 <button onClick={()=>handleClick(id)}>Fav</button>
             </div>
            </div>
         
            
    //         )}
    //  </div>
    );
};

export default Card;