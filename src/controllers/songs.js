const { getAllSongsService, getSongByIdService } = require('../services/song')
const { OK } = require("../utils/status");

const getAllSongs = async (req, res, next) => {
    try {
        const result = await getAllSongsService(req);

        res.status(OK).json({
            data: result
        });
    }
     catch (error) {
        return res.status(error.status).json({status: error.status, error:error.message})
    }
};

const getSongById = async (req, res, next) =>{
    try {
        const result = await getSongByIdService(req)

        res.status(OK).json({
            data:result
        });

    } catch (error) {
        return res.status(error.status).json({status: error.status, error:error.message})
    }
}


module.exports={getAllSongs, getSongById}