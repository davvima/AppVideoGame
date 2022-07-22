import { createSlice } from '@reduxjs/toolkit';

// Slice Object
///////////////////////////////////////
export const favorites = createSlice({
    name: "favorites",
    initialState: [],
    reducers: {
      addVideoGame: (state, action) => {
        state.push(action.payload);
        console.log(action)
      },
      removeVideoGame: (state, action) => {
        let gameFound = state.find(game => game.id === action.payload)
        if(gameFound) {
          state.splice(state.indexOf(gameFound),1)
        }
      }
      
    },
  });

// Exports
///////////////////////////////////////
export const {
    addVideoGame,
    removeVideoGame,
 } = favorites.actions;
 
 export default favorites.reducer;