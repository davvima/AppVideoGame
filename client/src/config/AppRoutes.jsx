import React from 'react';
import { Route, Routes } from 'react-router-dom';

// PAGES

import Home from 'pages/Home';
import Landing from 'pages/Landing';
import Details from 'pages/Details';
import Favorites from 'pages/Favorites';
import CreateForm from 'components/CreateForm';
import Resultados from 'pages/Resultados';

function AppRoutes(){
    return (
     <Routes>  
            <Route exact path="/" element = {<Landing />} />
            <Route path="/inicio" element = {<Home />} />
            <Route path="/detalle/:gameId" element = {<Details />} />
            <Route path="/create" element = {<CreateForm />} />
            <Route path="/favoritos" element = {<Favorites />} />
            <Route path="/search" element = {<Resultados />} />            
     </Routes>
    );
}

export default AppRoutes;