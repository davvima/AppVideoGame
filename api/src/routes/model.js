const sequelize_models = require('../db')
const axios = require('axios')
const API_KEY = '81b401f5c0c34feeab73bb2cebf36a4e'
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

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
            release:oneGame.release,
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
    console.log('entre al getGenres')
    const dbGenres = await Genres.findAll()
    let genres
    if(dbGenres.length>0){
        genres = dbGenres.map(e=>e.name)
    }else{
     const apiGenres = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)

     genres= apiGenres.data.results.map(e=>{
            Genres.findOrCreate({
                where: {
                    name:e.name,
                }
            })
            return e.name
        })        
        return genres

    }    
    return genres 
}

const createVideogame = async ( 
    name,
    description,
    release,
    img,
    rating,
    platforms,
    genres) =>{

    const videogameToCreate = await Videogames.create({
        name,
        description,
        release,
        img,
        rating,
        platforms,
        created:true        
    })

   
    
    const genresDb = await Genres.findAll({ where: {name: {[Op.in]: genres}} })

    await videogameToCreate.addGenres(genresDb)
    return videogameToCreate
}

const getApiDetail = async (idVideogame) =>{
    const apiDetail = await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`)
    const data = apiDetail.data
    const detail = {
        id:data.id,
        name:data.name,
        img:data.background_image,
        genres:data.genres.map(e=>e.name),
        description:data.description.replace(/<[^>]+>/g, ''),
        release:data.released,            
        rating:data.rating,
        ratings_count:data.ratings_count,
        platforms:data.platforms.map(e => {return {name: e.platform.name, id:e.platform.id}}),        
    }
    return detail
    
}

const getDbDetail = async (idVideogame)=>{
    const base = await Videogames.findByPk(id, {
        include: {
            model: Genres,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }
    });

    const detail ={
        id:base.id,
        name:base.name,
        img:base.img,
        genres:base.genres,
        description:base.description,
        release:base.release,            
        rating:base.rating,
        ratings_count:base.ratings_count,
        platforms:base.platforms
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
            release:oneGame.release,
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

module.exports = {getVideogames, getGenres, getApiDetail, getDbDetail, createVideogame, getDbInfo, searchVideoGame}