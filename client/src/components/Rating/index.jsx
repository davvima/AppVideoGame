import React from 'react';

import s from './rating.module.css'

const Rating = ({rating,ratings_count}) => {
    const star= <i className="fa fa-star" aria-hidden="true"></i>
    return (
        <div className={s.container}>
            <h3> 
                {rating}{star}/{ratings_count} votos 
            </h3>
            
        </div>
    );
};

export default Rating;