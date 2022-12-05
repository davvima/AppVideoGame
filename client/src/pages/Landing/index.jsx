import { Link } from 'react-router-dom';
import play from 'media/play.png'
import video from 'media/video2.mp4'

import s from './Landing.module.css'
import './Landing.module.css'

const Landing = () => {

    return (
        <div className={s.container}>
            <section className={s.sectionOne}>
                
                <div>

                 <h2>Toda la información que necesitas sobre tus videojuegos favoritos en una sola aplicación web.</h2>
                 <h1>EXPLORA NUEVOS MUNDOS</h1>
                    
                    
                <div className={s.button}><Link to="/inicio"> <button className='landingButton'> COMENZAR
                  </button> </Link></div>                    
                </div>

                <video 
                className={s.video} src={video} 
                autoPlay={true} muted={true} loop={true}></video>

            </section>
            

            <section className={s.sectionTwo}>
             <div>
                 <img className={s.play} src={play} alt="" />
                 <div className={s.button}><Link to="/inicio"> 
                     <button 
                         className='landingButton'> COMENZAR
                     </button> </Link>                    
                </div>
                 
             </div>

             <div className={s.description}>
                <h2>SPA (Single Page Aplication) de Videojuegos</h2>
                <h4>Construida en el marco del bootcamp de Henry, para afirmar y conectar los conceptos aprendidos en la carrera.</h4>
                    
                <h4>Es una aplicación web que se conecta a la API de raw.io para acceder a su base de datos sobre videojuegos y presentar esa información al usuario </h4>

                <p><strong>Funcionalidades del Proyecto:</strong></p>
                <ol>
                    <li>Landing page.</li>
                    <li>Opción para filtrar por género y por videojuego existente o agregado por nosotros</li>
                    <li>Opcion para ordenar tanto ascendentemente como descendentemente los videojuegos por orden alfabético y por rating</li>
                    <li> Paginado para ir buscando y mostrando los siguientes videojuegos.</li>
                    <li>Formulario Controlado con JavasScript para la creación de nuevos videojuegos</li>
                    <li>Un servidor en Node/Express que se conecta a la API y a una base de datos propia con Sequelize</li>

                </ol>

                <p><strong>Tecnologías Utilizadas:</strong></p>
                <ul>
                    <li>Front-End: ReactJs || Redux || CSS</li>
                    <li>Back-End: Node || Express || Sequelize</li>
                    <li>Base de datos: PostgresSQL</li>
                    <li>Control de Versiones: Git / GitHub</li>
                </ul>
                

             </div>

            </section>
            
            
        </div>
    );
};

export default Landing;