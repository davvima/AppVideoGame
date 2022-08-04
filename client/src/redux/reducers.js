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
          console.log('genresReducer',action.payload)
          return {
            ...state,
            genres: action.payload
          };
        
        case 'GET_DETAILS':
         return{
          ...state,
          details:action.payload
         }

        // case 'SET_LOADING': 
        //   return {
        //     ...state,
        //     loading: !state.loading
        //   };

        case 'SORT_LIST':
          const sortedList= sortListByType(state.gamesList,action.payload) 
          return {
            ...state, 
            gamesList: sortedList
          };

        // case 'SORT_BY_RATING':
        //   return {
        //     ...state, 
        //     gamesLoad: sortRating(action.payload, state.gamesLoad),
        //     pageReference: 0
        //   };

        case 'FILTER_BY_GENRE': 
        
          const filteredGames = action.payload==='All'? state.apiDbGames: state.apiDbGames.filter(e=>e.genres.includes(action.payload))
          console.log('reducer',action.payload)
          return {
            ...state, 
            gamesList: filteredGames
          };

          case 'FILTER_LIST': 
       
          const createdFilter = filterGames(state.apiDbGames,action.payload)  
          console.log('created', createdFilter)
          return {
            ...state, 
            gamesList: action.payload==='all'?state.apiDbGames:createdFilter
          };

          case 'POST_GAME': 
            return {...state};

          // case GET_BASE:
          //   return {
          //     ...state,
          //     gamesLoad: action.payload,
          //     gamesLoaded: action.payload,
          //     loading: false,
          //     pageReference: 0,
          //     reference: 'Owns'
            // };
      //     case DELETE_GAME: 
      //       return {...state};
          default: return state;
      // };

  }}

  export default reducers