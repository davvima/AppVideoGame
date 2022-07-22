import Card from 'components/Card';
import React from 'react';

import './list.css'

const List = ({listOfItems}) => {
  console.log(listOfItems)

    return (
        <>
        <h1>HOLA SOY LIST</h1>

        

        {!listOfItems.length && <div className="text-center">
            <div className="spinner-border" role="status">
             {/* <Loading></Loading> */}
              <span className="visually-hidden">Loading...</span>
           </div>
           </div> }
        {listOfItems.length && 
   
       <div className="grid">
          {listOfItems.map((oneGame)=>{            
              return(
              <div key={oneGame.id}>
                <Card
              //  category={props.category}
                      name={oneGame.name}
                      id={oneGame.id}
                      rating={oneGame.rating}
                      background_image={oneGame.background_image}
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