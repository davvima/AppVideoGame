const { Router } = require('express');
// const { Sequelize } = require('sequelize/types');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getAll, getGenres,createVideogame,getDetail} = require('./model')
const router = Router();

module.exports = router;

const videogames = '/videogames'
const genres = '/genres'

////////Rutas GET

//videogames & videogames?name=

router.get(videogames, async (req,res)=>{
    const {name} = req.query
    try{
        const allVideogames = await getAll()
        if(name){
            const nameVideogame = allVideogames.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))

            nameVideogame? res.json(nameVideogame):
            res.status(400).json('No se ha encontrado el videojuego')
        }else{
            res.json(allVideogames)
        }
        
    }catch(e){
        return res.status(400).json({ error: e.message })
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
        console.log(foundVideoGame)
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

        res.send("Videojuego creado correctamente")
    }catch(e){
        return res.status(400).json({ error: e.message })
    }
    
    
})