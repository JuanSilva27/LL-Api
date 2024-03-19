const charactersRepository = require("../repositories/characterRepository")
const { throwError } = require("../utils/errorHandle")
const { NotFound } = require("../utils/status")


const getAllCharactersService = async (req) => {
    try {
        const condition = req.query
        const characters = await charactersRepository.getAllCharacters(condition)
        return characters
    } catch (error) {
        throw error
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
        throw error
    }
}

module.exports = { getAllCharactersService, getCharacterByIdService }