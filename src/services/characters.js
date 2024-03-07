const charactersRepository = require("../repositories/character")
const { throwError } = require("../utils/errorHandle")
const { NotFound } = require("../utils/status")


const getAllCharactersService = async (req) => {
    try {
        const condition = req.query
        const characters = await charactersRepository.getAllCharacters(condition)
        return characters
    } catch (error) {
        throwError(error.message, error.status)
    }
};

const getCharacterByIdService = async (req) => {
    try {
        const { id } = req.params
        const character = await charactersRepository.getCharacterById(id)
        if(!character){
            throwError('Character not found', NotFound)
        }
        return character
    } catch (error) {
        throwError(error.message, error.status)
    }
}

module.exports = { getAllCharactersService, getCharacterByIdService }