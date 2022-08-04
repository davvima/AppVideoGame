import { Link } from 'react-router-dom';
import image from 'media/woman-playing.png'
import play from 'media/play.png'

import s from './Landing.module.css'
import './Landing.module.css'

const Landing = () => {

    return (
        <div className={s.container}>
            <section className={s.sectionOne}>
                <div>
                    <h1>EXPLORA NUEVOS MUNDOS</h1>
                    <h2>Toda la información que necesitas sobre tus videojuegos favoritos en una sola aplicación web.</h2>
                    <div className={s.button}><Link to="/inicio"> <button className='landingButton'> COMENZAR
             </button> </Link></div>
                    
                </div>
                <img className={s.womanPlaying} src={image} alt="woman playing" />

            </section>
            

            <section className={s.sectionTwo}>
             <img className={s.play} src={play} alt="" />

             <div className={s.description}>
                <h2>Aplicación de Videojuego</h2>
                <h3>Creada con REact bla bla</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam quam sunt et, tempore corporis odit ab quos alias officiis. Expedita quo atque corrupti laboriosam, commodi eaque odio temporibus quas.</p>
             </div>

            </section>
            
            
        </div>
    );
};

export default Landing;