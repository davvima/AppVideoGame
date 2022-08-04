import { useNavigate} from "react-router-dom";

import s from './search.module.css'

function Search(){
const navigate = useNavigate();

const submitHandler = e =>{
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value.trim();

if(keyword.length === 0){
    alert("Tienes que escribir una palabra clave")
    
 }else if(keyword.length<4){
    alert("Escribe más de 3 caracteres")

 }else{
     e.currentTarget.keyword.value = "";
     navigate(`/search?name=${keyword}`)
 }
}

    return(
        <>       
          <form className={s.search} onSubmit={submitHandler}>
              <label className="form-label">
                 <input className="input" type="text" name="keyword" placeholder="Busqueda..." />
             </label>
             <button className={s.button} type="submit">Buscar</button>
         </form> 
      </>
    )
    }

export default Search;