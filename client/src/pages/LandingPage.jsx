import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            <h1>HOLA SOY LA LANDING</h1>
            <Link to="/inicio">Home</Link>
            
        </div>
    );
};

export default LandingPage;