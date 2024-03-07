const { getAllCharactersService, getCharacterByIdService } = require("../services/characters");
const { OK } = require("../utils/status");

const getAllCharacters = async (req, res, next) => {
    try {
        const result = await getAllCharactersService(req);

        res.status(OK).json({
            data: result
        });
    }
    catch (error) {
        return res.status(error.status).json({ status: error.status, error: error.message })
    }
};

const getCharacterById = async (req, res, next) => {
    try {
        const result = await getCharacterByIdService(req)

        res.status(OK).json({
            data: result
        });

    } catch (error) {
        return res.status(error.status).json({ status: error.status, error: error.message })
    }
}


module.exports = { getAllCharacters, getCharacterById }