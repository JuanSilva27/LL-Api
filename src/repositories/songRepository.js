const {Song} = require ("../database/models")

const getAllSongs = async (condition) =>{
    const result = await Song.findAll(condition);
    return result
}

const getSongById = async (id) =>{
   return await Song.findByPk(id);
}

module.exports= {getAllSongs,getSongById};