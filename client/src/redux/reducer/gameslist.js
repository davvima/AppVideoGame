import { createSlice } from '@reduxjs/toolkit';
import axiosClient from 'config/axiosClient';

export const initialState = {
  favorites: [],
  gamesList: []
}

// Slice Object

export const gamesList = createSlice({
    name: "gamesList",
    initialState,
    reducers: {
      getVideoGames: (state, action) => {
        state.gamesList = action.payload;
      },
      addVideoGame: (state,action) => {
        console.log("paylaodAdd" ,action.payload)
        state.gamesList.push(action.payload)
      }
    },

  });




// Export actions

export const {
    getVideoGames, addVideoGame
 } = gamesList.actions;

 console.log(gamesList)

 // Export reducer
 
 export default gamesList.reducer;

export const fecthVideogames = () =>{
  console.log('soy el fetch')
  return async (dispatch) =>{
    const response = await axiosClient.get("/videogames")
        console.log('soy el axios',response)
        dispatch(getVideoGames(response))
  }
}