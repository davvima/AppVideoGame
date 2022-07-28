import { useNavigate} from "react-router-dom";

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
          <form className="d-flex align-items-center mx-2" onSubmit={submitHandler}>
              <label className="form-label mb-0 mx-2">
                 <input className="form-control" type="text" name="keyword" placeholder="Busqueda..." />
             </label>
             <button className="btn btn-outline-light" type="submit">Buscar</button>
         </form> 
      </>
    )
    }

export default Search;