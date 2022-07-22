import React from 'react';

const CreateForm = () => {

    const handleSubmit = e=>{
        e.preventDefault()
        console.log(e)
    }

    return (
        <form onSubmit={handleSubmit}>
      <fieldset>
        <label>Name: <input type="text" name="first-name" required="" /></label>
        <label>Generos: <input type="email" name="email" required="" /></label>
        <label>Descripción:
          <textarea name="bio" rows="3" cols="30" placeholder="I like coding on the beach..."></textarea>
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
        <label>Sube una imagen: <input type="file" name="file" /></label>
        <label>Fecha de lanzamiento: <input type="date" name="age" min="13" max="120" />
			  </label>
        <label>Plataformas
          <select name="referrer">
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