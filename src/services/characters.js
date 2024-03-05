const charactersRepository = require("../repositories/character")
const { throwError } = require("../utils/errorHandle")
const { ISError } = require("../utils/status")


const getAllCharacters = async (query) =>{
    try {
        const condition = query
        const characters =await charactersRepository.getAllCharacters()
        return characters
    } catch (error) {
        throwError(error.message, ISError)
    }
}

module.exports = {getAllCharacters}