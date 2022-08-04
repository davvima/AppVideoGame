import OneDetails from 'components/OneDetails';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetails } from 'redux/actions';

const Details = () => {

    const {gameId} = useParams();
    const dispatch = useDispatch()
    const details = useSelector(state=>state.details)

    let { id, img, name, genres, description, release, rating, platforms } = details;

//    if(description.slice(0,3)==='<p>'){
//     description = description.slice(3,-3)
//     console.log(description)
//    }

    useEffect(()=>{
      dispatch(getDetails(gameId))
    },[dispatch,gameId])

    return (
        <div>
            {console.log(details)}
                {name && <OneDetails
                id={id}
                img={img ? img : 'notImage'}
                name={name}
                genres={genres}
                description={description}
                release={release}
                rating={rating}
                platforms={platforms}
            /> }

            
            
        </div>
    );
};

export default Details;