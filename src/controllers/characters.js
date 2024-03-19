const { getAllCharactersService, getCharacterByIdService } = require("../services/charactersServices");
const { OK } = require("../utils/status");

const getAllCharacters = async (req, res, next) => {
    try {
        const result = await getAllCharactersService(req);

        res.status(OK).json({
            data: result
        });
    }
    catch (error) {
        next(error)
    }
};

const getCharacterById = async (req, res, next) => {
    try {
        const result = await getCharacterByIdService(req)

        res.status(OK).json({
            data: result
        });

    } catch (error) {
        next(error)
    }
}


module.exports = { getAllCharacters, getCharacterById }