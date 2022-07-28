import React, { useEffect, useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import axiosClient from 'config/axiosClient';
import List from 'components/List';

const Resultados = () => {
    const [searchParams]=useSearchParams()
    const keyword = searchParams.get('name')
    console.log("keyword",keyword)

    const[results, setResults] = useState([]) 

    useEffect(()=>{
            
            
        const getSearch = async (keyword) =>{
            const response = await axiosClient.get(`/videogames?name=${keyword}`)
            setResults(response)
        }      
        
        getSearch(keyword)
    },[keyword])

    return (
        <div>
            <h3>Palabra Clave: {keyword}</h3>
            <List listOfItems={results}></List>

            
        </div>
    );
};

export default Resultados;