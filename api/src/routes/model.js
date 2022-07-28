const sequelize_models = require('../db')
const axios = require('axios')
const API_KEY = '81b401f5c0c34feeab73bb2cebf36a4e'

const {Videogames, Genres} = sequelize_models

const getApiInfo = async () =>{
    let apiData =[]
    let response = await axios.get(`https://api.rawg.io/api/games?page_size=40&key=${API_KEY}`)
    
    while(apiData.length<100){
        apiData=[...apiData, ...response.data.results]

        if(!response.data.next){
            return apiData
        }       
        response = await axios.get(response.data.next) 

    }

    let apiInfo = apiData.slice(0,100).map(oneGame=>{
        return{
            id:oneGame.id,
            name:oneGame.name,
            released:oneGame.released,
            img:oneGame.background_image,
            rating:oneGame.rating,
            ratings_count:oneGame.ratings_count,
            platforms:oneGame.platforms.map(e => {return {name: e.platform.name, id:e.platform.id}}),
            genres:oneGame.genres.map(e=>e.name),
            created:false
        }
    })
    return apiInfo
    
}

const getDbInfo = async (name) =>{
    if (!name){
        return await Videogames.findAll({
            include:{
                model: Genres,
                attributes: ['name'],
                through:{
                    attributes:[]
                }
            }
        })
    }else{
        return await Videogames.findAll({
            where:{name:name}
        })
    }
}

const getVideogames = async () =>{
    const apiInfo = await getApiInfo()
    const dbInfo = await getDbInfo()
    const info = apiInfo.concat(dbInfo)
    return info
}

const getGenres = async () =>{
    const apiGenres = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    apiGenres.data.results.map(e=>{

     Genres.findOrCreate({
            where: {
                name:e.name,
                image:e.image_background
            }
        })
    })
    const dbGenres = await Genres.findAll()
    return(dbGenres)   
}

const createVideogame = async ( 
    name,
    description,
    release,
    rating,
    genres,
    platforms) =>{

    const videogameToCreate = await Videogames.create({
        name,
        description,
        release,
        rating,
        platforms,
        created:true        
    })
    const genresDb = await Genres.findAll({
        where:{name : genres}
    })

    videogameToCreate.addGenres(genresDb)
}

const getDetail = async (idVideogame) =>{
    const apiDetail = await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`)
    const data = apiDetail.data
    const detail = {
        id:data.id,
        name:data.name,
        img:data.background_image,
        genres:data.genres.map(e=>e.name),
        description:data.description,
        released:data.released,            
        rating:data.rating,
        ratings_count:data.ratings_count,
        platforms:data.platforms.map(e => {return {name: e.platform.name, id:e.platform.id}}),        
    }
    return detail
    
}

const searchVideoGame = async (keyword)=>{
    const response = await axios.get(`https://api.rawg.io/api/games?search=${keyword}&key=${API_KEY}`)
    const data = response.data.results

    let results = data.slice(0,15).map(oneGame=>{
        return{
            id:oneGame.id,
            name:oneGame.name,
            released:oneGame.released,
            img:oneGame.background_image,
            rating:oneGame.rating,
            ratings_count:oneGame.ratings_count,
            platforms:oneGame.platforms.map(e => {return {name: e.platform.name, id:e.platform.id}}),
            genres:oneGame.genres.map(e=>e.name),
            created:false
        }
    })
    return results
}

module.exports = {getVideogames, getGenres, getDetail, createVideogame, getDbInfo, searchVideoGame}