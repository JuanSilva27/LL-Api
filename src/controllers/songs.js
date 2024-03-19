const { getAllSongsService, getSongByIdService } = require('../services/songServices')
const { OK } = require("../utils/status");

const getAllSongs = async (req, res, next) => {
    try {
        const result = await getAllSongsService(req);

        res.status(OK).json({
              result
        });
    }
     catch (error) {
        next(error)
    }
};

const getSongById = async (req, res, next) =>{
    try {
        const result = await getSongByIdService(req)
        console.log(result)

        res.status(OK).json({
              result
        });

    } catch (error) {
        next(error)
    }
}


module.exports={getAllSongs, getSongById}