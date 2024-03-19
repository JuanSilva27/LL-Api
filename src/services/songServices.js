const songRepository = require('../repositories/songRepository')
const { throwError } = require('../utils/errorHandle')
const { ISError, NotFound } = require('../utils/status')


const getAllSongsService = async (req) =>{
    try {
        const condition = req.query
        const songs = await songRepository.getAllSongs(condition)
        return songs
    } catch (error) {
        throw error
    }
}

const getSongByIdService = async (req) =>{
    try {
        const {id} = req.params
        const song = await songRepository.getSongById(id)
        if(!song){
            throwError('Song not found', NotFound)
        }
        return song
    } catch (error) {
        throw error
    }
}


module.exports= {getAllSongsService, getSongByIdService}