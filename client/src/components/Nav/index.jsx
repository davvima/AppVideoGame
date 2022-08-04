import Search from 'components/Search';
import {Link, useLocation} from 'react-router-dom'

//Styles
import s from './nav.module.css';
import logo from 'media/logo.png'

const menu = [
    {
        display: 'Home',
        path: '/inicio'
    },
    {
        display: 'Favoritos',
        path: '/favoritos'
    },
    {
        display: 'Crear',
        path: '/create'
    }
];


function Nav (){

    const { pathname } = useLocation();
    const active = menu.findIndex(e => e.path === pathname);

    function handleOnClick () {
        const navGroup = document.getElementById('navbarGroup')
        navGroup.classList.toggle('nav_visible')
    }
 


return(
    <>
    <div className={s.separator}></div>
    <nav className={s.navbar}>
        
        <div className={s.navContent}>
            
            <Link className={s.brand} to = "/"> 
            <img src={logo} alt="logo"/> 
            <div className={s.name}>PlayApp</div> 
            </Link>
            
            <div id= 'navbarGroup' className={s.navbarGroup}>
               <ul className={s.navbarMenu}>
                   {
                        menu.map ((e,i) => (
                        <li key={i} 
                        className={s.navItem +' '+(i === active ? 'active' : '')}
                        >
                        <Link to ={e.path}> {e.display} </Link>  
                        </li>   
                        )) 
                    }         
                </ul> 

                <Search />
           </div>

            <button className={s.toggle}
                 onClick={handleOnClick}>
                 <i className="fa-solid fa-bars"></i>
            </button>  
       </div>                               
    </nav>
    </>
    )
}

export default Nav