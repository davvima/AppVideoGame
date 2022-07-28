import Search from 'components/Search';
import {Link} from 'react-router-dom'

//Styles
// import './nav.css';

const menu = [
    {
        display: 'Home',
        path: '/inicio'
    },
    {
        display: 'Categorías',
        path: '/'
    },
    {
        display: 'Favoritos',
        path: '/favoritos'
    },
    {
        display: 'Crear Videojuego',
        path: '/create'
    }
];

// function handleOnClick () {
//     const navGroup = document.querySelector('.nav-group')
//     navGroup.classList.toggle('nav_visible')
// }

function Nav (){

    // const { pathname } = useLocation();
    // const active = headerNav.findIndex(e => e.path === pathname);


return(
    <nav className="navbar">
        <div className='separador'></div>
        <div className="nav-content">
            
            <Link className="brand" to = "/"> VIDEOGAMES </Link>
            
            <div className='nav-group'>
               <ul className="navbar-menu">
                   {
                        menu.map ((e,i) => (
                        <li key={i} 
                        // className={`nav-item ${i === active ? 'active' : ''}`}
                        >
                        <Link to ={e.path}> {e.display} </Link>  
                        </li>   
                        )) 
                    }         
                </ul> 

                <Search />
           </div>

            <button className="toggle"
                    // onClick={handleOnClick} 
                    >
                <i className="fa-solid fa-bars"></i>
            </button>  
       </div>                               
    </nav>
    )
}

export default Nav