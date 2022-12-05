import OneDetails from 'components/OneDetails';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetails } from 'redux/actions';

const Details = () => {

    const {gameId} = useParams();
    const dispatch = useDispatch()
    const details = useSelector(state=>state.details)
    const [oneDetails, setOneDetails] =useState({})
    console.log(details)

    let { id, img, name, genres, description, release, rating, ratings_count, platforms } = oneDetails;
    

    useEffect(()=>{
      if(Object.entries(details).length===0) dispatch(getDetails(gameId))
      setOneDetails(details)
      
    },[dispatch,gameId,details])

    useEffect(()=>{
        return ()=> dispatch(getDetails())
       },[dispatch]) 


    return (
        <>
                {name && <OneDetails
                id={id}
                img={img ? img : 'notImage'}
                name={name}
                genres={genres}
                description={description}
                release={release}
                rating={rating}
                platforms={platforms}
                ratings_count={ratings_count}
            /> }

            
            
        </>
    );
};

export default Details;