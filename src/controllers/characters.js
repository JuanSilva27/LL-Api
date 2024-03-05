const characterService = require("../services/characters");
const { OK } = require("../utils/status");

const getAllCharacters = async (req, res, next) => {
    try {
        const query = req.query;

        const result = await characterService.getAllCharacters();

        res.status(OK).json({
            data: result
        });
    }
     catch (error) {
        next(error);
    }
};

module.exports={getAllCharacters}