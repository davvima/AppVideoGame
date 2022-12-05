import axiosClient from "config/axiosClient";

export const getVideoGames = () => {
    return async function(dispatch) {
        const response = await axiosClient.get('/videogames');

        return dispatch({
            type: 'GET_GAMES',
            payload: response
        });
    };
};

export const getGenres = () => {
    return async function(dispatch) {
        const response = await axiosClient.get('/genres')
            return dispatch({
                type: 'GET_GENRES',
                payload: response
            });
    };
};

export const getDetails = (id) => {
    return async function(dispatch) {
          if(id){
        var response = await axiosClient('/videogames/' + id);
        return dispatch({
            type: 'GET_DETAILS',
            payload: response
        });      
        }else{
            return dispatch({
                type: 'GET_DETAILS',
                payload: {}
            });  
         }
};

export const postVideoGame = (body) => {
    return async function(dispatch) {
        var response = await axiosClient({
            method: 'post',
            url: '/videogames',
            data: body
        })
        return dispatch({
            type: 'POST_GAME',
            payload:response
        })
    };
};


export const sortList = (payload) => {
    return {
        type: 'SORT_LIST',
        payload,
    };
};

export const sortRating = (num) => {
    return {
        type: 'SORT_RATING',
        payload: num,
    };
};

export const filterGenre = (genre) => {
    return {
        type: 'FILTER_BY_GENRE',
        payload: genre
    };
};

export const filterList =(payload) => {
    return{
        type:'FILTER_LIST',
        payload
    }
}

//FAVORITES
export const addFavorites = (obj) =>{
    return{
        type:'ADD_FAVORITE',
        payload:obj
    }
}

export const removeFavorites = (id) =>{
    return{
        type:'REMOVE_FAVORITE',
        payload:id
    }
}