import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postVideoGame, getGenres } from 'redux/actions';

import s from './createForm.module.css'

const CreateForm = () => {

  const[input, setInput] = useState({
    name:'',
    description:'',
    release:'',
    rating:0,
    genres:[],
    platforms:[],
    img:''
  })

  const [errors, setErrors]=useState({disabled:'true'})

  const dispatch=useDispatch()

  const {platforms,genres} = useSelector(state=> state)


  useEffect(()=>{
    dispatch(getGenres())
  },[dispatch])

  //ONSUBMIT

    const handleSubmit = e=>{
      e.preventDefault()    
      dispatch(postVideoGame(input))
      setInput({
        name:'',
        description:'',
        release:'',
        rating:0,
        genres:[],
        platforms:[],
        img:''
      })
    }

    //ONCHANGE

    const handleChange = e=>{
      
      setInput({...input,
        [e.target.name] : e.target.value})
        setErrors(validate({
          ...input,
          [e.target.name] : e.target.value
        }))
        console.log('errors',errors)
        console.log(input)

    }

    //ONCHECK

    const handleClick= e=>{
    
        setInput({...input,
          [e.target.name]: [...input[e.target.name], e.target.value]})
  
      setErrors(validate({
        ...input,
        [e.target.name] : [...input[e.target.name], e.target.value]
      }))
    }

    //VALIDACIÓN DE FORMULARIO

    const validate = input =>{
      let errors ={}
      if(!input.name){
        errors.name = 'Se requiere un Nombre'
      }else if (input.genres.length===0){
        errors.genres = 'Debes agregar almenos un género'
      }else if(!input.description){
        errors.description = 'Debes agregar una descripción'
      }else if(input.rating===0){
        errors.rating = '¿Qué puntaje le das a tu juego?'
      }else if (input.rating<0 || input.rating>5){
        errors.rating = 'Selecciona un puntaje entre 0 y 5'
      }else if(!input.release){
        errors.release = 'Selecciona una Fecha'
      }else if (input.platforms.length===0){
        errors.platforms = 'Debes agregar almenos una plataforma'
      }
      return errors
    }

    return (
      <>
      <br />
      <h1>¡Crea tu Videojuego!</h1>

        <form className={s.form} onSubmit={handleSubmit}>
      <fieldset>
        <div>
        <label><strong>Nombre:</strong>  <input 
        className={s.input}
        type="text" 
        name="name" 
        value={input.name}
        onChange={handleChange} />
        </label>
        {errors.name && (
          <p className='error'>{errors.name}</p>
        )}
        </div>
        <br />

        <div>
        <label><strong>Géneros:</strong>  <br />

            {genres.map((e,idx)=>
            <label key={idx}>
             <input className={s.button}
               name='genres'
               type="button" 
               value={e}
               onClick={handleClick} />
             </label>
            )}
        </label>
        {errors.genres && (
          <p className='error'>{errors.genres}</p>
        )}
        </div>
        <br />

        <div>
        <label><strong>Descripción: <br /></strong>

          <textarea 
          className={s.input}
          name="description" 
          rows="3" 
          cols="30" 
          value={input.description} 
          placeholder="El mejor juego de la historia..."
          onChange={handleChange}>
          
          </textarea>
			  </label>
        {errors.description && (
          <p className='error'>{errors.description}</p>
        )}
        </div>

        <div>
        <label><strong>Rating:</strong> <br />
          <input 
          className={s.input}
          name="rating" 
          type="number"
          min="0"
          max="5"
          step="0.1"
          value={input.rating} 
          onChange={handleChange}>
          
          </input>          
			  </label> 
        {errors.rating && (
          <p className='error'>{errors.rating}</p>
        )}  
        </div>     

      </fieldset>

      <br />

      <fieldset>
        <label><strong>Imagen:</strong> <br />  <input 
          className={s.input}
          type="text" 
          name="img"
          onChange={handleChange} />
        </label>

        <br />

        <div>
        <label><strong>Fecha de lanzamiento:</strong> <br /> 
          <input 
            className={s.input}
            type="date" 
            name="release"
            value={input.release}
            onChange={handleChange} />
			  </label>
        {errors.release && (
          <p className='error'>{errors.release}</p>
        )}
        </div>

        <br />

        <label><strong>Plataformas:</strong> <br /> 
            {platforms.map((e,idx)=>
            <label key={idx}>
             <input 
               className={s.platforms}
               name='platforms'
               type="checkbox"  
               value={e}
               onChange={handleClick} />{e}
             </label>
            )}
            {errors.platforms && (
          <p className='error'>{errors.platforms}</p>
        )}
        </label>
        <br />
        <br />
       
      </fieldset>
      <input disabled={Object.entries(errors).length === 0?false:true} type="submit" value="Submit" />
    </form>

    </>
    );
};

export default CreateForm;