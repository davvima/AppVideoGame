import React from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {

    const {gameId} = useParams();
    console.log(gameId)

    return (
        <div>
            <h1>HOLA SOY DETALLES</h1>
            
        </div>
    );
};

export default Details;