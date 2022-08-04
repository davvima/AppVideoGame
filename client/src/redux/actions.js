import axiosClient from "config/axiosClient";

export const getVideoGames = () => {
    return async function(dispatch) {
        const response = await axiosClient.get('http://localhost:3001/videogames');

        return dispatch({
            type: 'GET_GAMES',
            payload: response
        });
    };
};

export const getGenres = () => {
    return async function(dispatch) {
        const response = await axiosClient.get('http://localhost:3001/genres')
            return dispatch({
                type: 'GET_GENRES',
                payload: response
            });
    };
};

// export const getQuery = (input) => {
//     return function(dispatch) {
//         return fetch(`http://localhost:3001/videogames?name=${input}`)
//         .then((r) => r.response())
//         .then((response) => {
//             return dispatch({
//                 type: 'GET_QUERY',
//                 payload: response
//             });
//         });
//     };
// };

export const getDetails = (id) => {
    return async function(dispatch) {
        var response = await axiosClient('http://localhost:3001/videogames/' + id);
        console.log('response',response)
        return dispatch({
            type: 'GET_DETAILS',
            payload: response
        });      
    };
};

export const postVideoGame = (body) => {
    return async function(dispatch) {
        var response = await axiosClient({
            method: 'post',
            url: 'http://localhost:3001/videogames',
            data: body
        })
        console.log(response)
        return dispatch({
            type: 'POST_GAME',
            payload:response
        })
    };
};



// export const setLoading = () => {
//     return {
//         type: SET_LOADING,
//     };
// };


export const sortList = (payload) => {
    console.log('soy action', payload)
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