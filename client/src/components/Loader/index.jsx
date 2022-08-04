import React from 'react';

//STYLES

import s from './loader.module.css'

const Loader = () => {
    return (
        <>
        <div className={s.container}>
            <div className={s.spiner}>
                <div className="loader">
                    <svg viewBox="0 0 80 80">
                        <circle id="test" cx="40" cy="40" r="32"></circle>
                    </svg>
                </div>

                <div className="loader triangle">
                    <svg viewBox="0 0 86 80">
                        <polygon points="43 8 79 72 7 72"></polygon>
                    </svg>
                </div>

                <div className="loader">
                    <svg viewBox="0 0 80 80">
                        <rect x="8" y="8" width="64" height="64"></rect>
                    </svg>
                </div>
            </div>
            <br />
         <span className={s.text}>Cargando Videojuegos...</span>
        </div>
         
         
        </>
    );
};

export default Loader;