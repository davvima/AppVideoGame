import Card from 'components/Card';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

import './list.css'

const List = ({listOfItems}) => {

  console.log("soy list",listOfItems)
  const [searchParams] = useSearchParams()
  const query ={
    page:searchParams.get('page'),
    limit:searchParams.get('limit')
  }
  console.log
  let listToRender

  if(query.page && query.limit){

   listToRender = listOfItems.slice((query.page*query.limit-query.limit),(query.page*query.limit))
  }else{
    listToRender =listOfItems.slice(0,20)
  }

  console.log("listToRender", listToRender)

    return (
        <>
        <h1>HOLA SOY LIST</h1>
        

        {!listToRender.length && <div className="text-center">
            <div className="spinner-border" role="status">
             {/* <Loading></Loading> */}
              <span className="visually-hidden">Loading...</span>
           </div>
           </div> }

        {listToRender.length>0 && 
   
       <div className="grid">
          {listToRender.map((oneGame)=>{   
              return(
              <div key={oneGame.id}>
                <Card
                      name={oneGame.name}
                      id={oneGame.id}
                      rating={oneGame.rating}
                      img={oneGame.img}
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