import { filterGames, sortListByType } from "./config";

let initialState = {
    apiDbGames: [],
    gamesList: [],
    genres: [],
    platforms: ["PC", "PlayStation 5", "PlayStation 4", "Xbox One", "Xbox Series S/X", "Nintendo Switch", "iOS", "Android", "Nintendo 3DS", "macOS", "Xbox 360", "Xbox", "PlayStation 3", "PlayStation 2", "Wii U", "Nintendo 64", "Game Boy Advance", "Game Boy Color", "Game Boy", "GameCube"],
    loading: false,
    favorites:[],
    details:{}
  };

  const reducers = (state=initialState,action)=>{
    switch (action.type) {
        case 'GET_GAMES':
          return {
            ...state,
            apiDbGames: action.payload,
            gamesList: action.payload,
          };
        case 'GET_GENRES':
          return {
            ...state,
            genres: action.payload
          };
        
        case 'GET_DETAILS':
         return{
          ...state,
          details:action.payload
         }

        case 'SORT_LIST':
          const sortedList= sortListByType(state.gamesList,action.payload) 
          return {
            ...state, 
            gamesList: sortedList
          };

        case 'FILTER_BY_GENRE': 
        
          const filteredGames = action.payload==='All'? state.apiDbGames: state.apiDbGames.filter(e=>e.genres.includes(action.payload))
          return {
            ...state, 
            gamesList: filteredGames
          };

        case 'FILTER_LIST': 
       
          const createdFilter = filterGames(state.apiDbGames,action.payload)  
          return {
            ...state, 
            gamesList: action.payload==='all'?state.apiDbGames:createdFilter
          };

        case 'POST_GAME': 
            return {...state};

        case 'ADD_FAVORITE':
          return {...state,
          favorites:[...state.favorites,action.payload]}

        case 'REMOVE_FAVORITE':
          return {...state,
          favorites:state.favorites.filter(e=>e.id !== action.payload)}
         
          default: return state;
      // };

  }}

  export default reducers