import React from 'react';
import { Link } from 'react-router-dom';

const Pages = ({limit}) => {
    const pages = [
        {
            display: '1',
            path: '/inicio'
        },
        {
            display: '2',
            path: '?page=2&limit='+limit
        },
        {
            display: '3',
            path: '?page=3&limit='+limit
        },
        {
            display: '4',
            path: '?page=4&limit='+limit
        },
        {
            display: '5',
            path: '?page=5&limit='+limit
        }
    ];

 return(
                  <ul className="numberOfPages">
                   {
                        pages.map ((e,i) => (
                        <li key={i} 
                        // className={i === active ? 'active' : ''}
                        >
                        <Link to ={e.path}> {e.display} </Link>  
                        </li>   
                        )) 
                    }         
                </ul> 
    );
};

export default Pages;