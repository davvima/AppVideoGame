import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addVideoGame } from 'redux/reducer/gameslist';
import  reducer  from 'redux/reducer/gameslist';

const CreateForm = () => {
  console.log(reducer)
  const dispatch=useDispatch()

    const handleSubmit = e=>{
        e.preventDefault()
        console.log(e.target.elements)
        const elements = e.target.elements
      
        const body ={
          name:elements.name.value,
          description:elements.description.value,
          release:elements.date.value,
          rating:0,
          genres:[elements.genres.value],
          platforms:[elements.platforms.value]
        }

        console.log(body)
        axios({
          method: 'post',
          url: 'http://localhost:3001/videogames',
          data: body
        })
        .then(response => {
          
          const gameCreated = response.data.gameCreated
          const message = response.data.message
          console.log("created",gameCreated)
          dispatch(addVideoGame(gameCreated[0]))
          alert(message)
        });
    }

    return (
        <form onSubmit={handleSubmit}>
      <fieldset>
        <label>Name: <input type="text" name="name" required="" /></label>
        <label>Generos: <input type="text" name="genres" required="" /></label>
        <label>Descripción:
          <textarea name="description" rows="3" cols="30" placeholder="I like coding on the beach..."></textarea>
			  </label>
      </fieldset>
      {/* <fieldset>
        <label><input type="radio" name="account-type" class="inline" /> Personal Account</label>
        <label><input type="radio" name="account-type" class="inline" /> Business Account</label>
        <label>
          <input type="checkbox" name="terms" class="inline" required="" /> I accept the <a href="https://www.freecodecamp.org/news/terms-of-service/">terms and conditions</a>
			  </label>
      </fieldset> */}
      <fieldset>
        <label>Sube una imagen: <input type="file" name="image" /></label>
        <label>Fecha de lanzamiento: <input type="date" name="date" min="13" max="120" />
			  </label>
        <label>Plataformas
          <select name="platforms">
            <option value="">(select one)</option>
            <option value="1">freeCodeCamp News</option>
            <option value="2">freeCodeCamp YouTube Channel</option>
            <option value="3">freeCodeCamp Forum</option>
            <option value="4">Other</option>
          </select>
        </label>
       
      </fieldset>
      <input type="submit" value="Submit" />
    </form>
    );
};

export default CreateForm;