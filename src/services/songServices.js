const songRepository = require('../repositories/songRepository')
const { throwError } = require('../utils/errorHandle')
const { ISError, NotFound } = require('../utils/status')


const getAllSongsService = async (req) =>{
    try {
        const condition = req.query
        const songs = await songRepository.getAllSongs(condition)
        return songs
    } catch (error) {
        throwError(error.message, ISError)
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
        throwError(error.message, error.status)
    }
}


module.exports= {getAllSongsService, getSongByIdService}