const charactersRepository = require("../repositories/character")
const { throwError } = require("../utils/errorHandle")
const { ISError, NotFound } = require("../utils/status")


const getAllCharactersService = async (req) => {
    try {
        const condition = req.query
        const characters = await charactersRepository.getAllCharacters(condition)
        return characters
    } catch (error) {
        throwError(error.message, ISError)
    }
};

const getCharacterByIdService = async (req) => {
    try {
        const { id } = req.params
        const character = await charactersRepository.getCharacterById(id)
        console.log(character)

        if(character===null){
            throwError('Character not found', NotFound)
        }

        return character
    } catch (error) {
        throwError(error.message, error.status)
    }
}

module.exports = { getAllCharactersService, getCharacterByIdService }