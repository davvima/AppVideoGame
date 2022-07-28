const { Router } = require('express');
// const { Sequelize } = require('sequelize/types');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getVideogames, getGenres,createVideogame,getDetail, getDbInfo, searchVideoGame} = require('./model')
const router = Router();

module.exports = router;

const videogames = '/videogames'
const genres = '/genres'

////////Rutas GET

//videogames & videogames?name=

router.get(videogames, async (req,res)=>{
    const {name} = req.query
    if(name){
        try{
            const gameFound = await searchVideoGame(name)
            gameFound? res.json(gameFound):
            res.status(400).json('No se ha encontrado el videojuego')
        }catch(e){
            return res.status(400).json({ error: e.message })
        }
    }else{
        
     try{
         const allVideogames = await getVideogames()
         res.json(allVideogames)
            
            // const nameVideogame = allVideogames.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))          
       }catch(e){
          return res.status(400).json({ error: e.message })
        } 
    }
})

router.get(genres, async(req,res) =>{
    try{
     const genres = await getGenres()
     res.json(genres)
    }catch(e){
        return res.status(400).json({ error: e.message })
    }

})

// DETAIL videogames/id

router.get(videogames + '/:idVideogame', async (req,res)=>{
    const {idVideogame} = req.params
    try{
        const foundVideoGame = await getDetail(idVideogame)
        foundVideoGame ? res.json(foundVideoGame):
        res.send('Videojuego no encontrado')
    }catch(e){
        return res.status(400).json({ error: e.message })
    }
})

////////RUTAS POST

//videogames

router.post(videogames, async(req,res)=>{
    const{
        name,
        description,
        release,
        rating,
        genres,
        platforms
    } = req.body

    try{
    createVideogame(name,
        description,
        release,
        rating,
        genres,
        platforms)

        
    }catch(e){
        return res.status(400).json({ error: e.message })
    }
    
    let gameCreated = await getDbInfo(name)
    res.json({gameCreated, message:"Videojuego creado correctamente"})
    
})