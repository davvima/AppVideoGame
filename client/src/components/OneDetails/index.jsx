import Genres from 'components/Genres';
import Rating from 'components/Rating';
import React, { useState } from 'react';
import s from './oneDetails.module.css'



const OneDetails = ({ img, name, genres, description, release, rating, ratings_count, platforms }) => {

    let [seeMore, setSeeMore] = useState(false)

    let shortDescription = description.substring(0,300) + '...'

    const handleClick = e =>{
        e.preventDefault()
        setSeeMore(!seeMore)
    }

    return (
        <>
         <div className={s.background} 
               style={{backgroundImage: `url(${img})`}}>
         </div> 

         <div className={s.container} >
             <div className={s.title}>
                <h1>{name}</h1>
             </div>

             <section className={s.description}>
                 <div className={s.image}>
                     <img src={img} alt={name} />
                     <Rating rating={rating} ratings_count={ratings_count}></Rating>
                 </div>
                 <div className={s.text}>
                     <p>{!seeMore?shortDescription:description}</p>
                     <button
                         onClick={handleClick}>{!seeMore? 'Ver más': 'Ver menos'}
                     </button> 
                     <p><strong>Fecha de lanzamiento:</strong> {release}</p>
                     {
                        genres.length === 0 ?
                        <h3>no genres associated</h3> :
                        <Genres listOfGenres={genres} />
                     }
                 </div>                
             </section> 

             <section className={s.sectionTwo}>
                <div className={s.sectionContainer}>
                 <div className={s.platforms}>
                        {
                            platforms.length === 0 ?
                            <h4>no platfroms associated</h4> :
                            platforms.map((e,idx)=> {
                            return(
                            <div key={idx}>
                                <h4>{e.name}</h4>
                            </div>)} )
                        }
                 </div>
                 </div>
                </section>           
         </div>
        </>
    );
};

export default OneDetails;