import Card from 'components/Card';
import Loader from 'components/Loader';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

import s from './list.module.css'

const List = ({listOfItems}) => {

  const [searchParams] = useSearchParams()
  const query ={
    page:searchParams.get('page'),
    limit:searchParams.get('limit')?searchParams.get('limit'):15
  }

  let listToRender

  if(query.page && query.limit){

   listToRender = listOfItems.slice((query.page*query.limit-query.limit),(query.page*query.limit))
  }else{
    listToRender =listOfItems.slice(0,query.limit)
  }

  console.log("listToRender", listToRender)

    return (
        <>      
        {listToRender.length<=0 && <Loader />}

        {listToRender.length>0 && 
   
       <div className={s.container}>
          {listToRender.map((oneGame)=>{   
              return(
              <div className={s.cardContainer} key={oneGame.id}>
                <Card
                      name={oneGame.name}
                      id={oneGame.id}
                      rating={oneGame.rating}
                      img={oneGame.img}
                      genres={oneGame.genres}
                />
                </div>
            )
          })}
        </div>
        }
           
      </> 
    );
};

export default List;