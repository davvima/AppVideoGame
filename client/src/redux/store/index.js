import { configureStore } from "@reduxjs/toolkit";

import favoritesReducer from "redux/reducer/favorites";
import gamesListsReducer from "redux/reducer/gameslist";


export const store = configureStore({
    reducer:{
        gamesList: gamesListsReducer,
        favorites:favoritesReducer

    }
});