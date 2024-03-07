const songRepository = require('../repositories/song')
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
    } catch (error) {
        throwError(error.message, ISError)
    }
}


module.exports= {getAllSongsService, getSongByIdService}