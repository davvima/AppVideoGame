import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fecthVideogames } from 'redux/reducer/gameslist';

const LandingPage = () => {

    const dispatch = useDispatch()

    useEffect(()=>{    
        dispatch(fecthVideogames())
    })

    return (
        <div>
            <h1>HOLA SOY LA LANDING</h1>
            <Link to="/inicio">Home</Link>
            
        </div>
    );
};

export default LandingPage;