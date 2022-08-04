import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import s from './pages.module.css'

const Pages = ({limit,length}) => {

    let pages = [{
            display: 1,
            path: '/inicio'
        }]

    for(let i = 2; i<=(Math.ceil(length/limit));i++){
        
        const page = {
            display:i,
            path: `?page=${i}&limit=${limit}`
        }
        pages = [...pages,page]
    }

    const [searchParams] = useSearchParams()
    const currentPage = searchParams.get('page') ? searchParams.get('page') :1
    const active = pages.findIndex(e => e.display === parseInt(currentPage))
    

 return(
                  <ul className={s.numberOfPages}>
                   {
                        pages.map ((e,i) => (
                        <li key={i} 
                        className={i === active ? s.active : ''}
                        >
                        <Link to ={e.path}> {e.display} </Link>  
                        </li>   
                        )) 
                    }         
                </ul> 
    );
};

export default Pages;