const charactersRepository = require("../repositories/characterRepository")
const { throwError } = require("../utils/errorHandle")
const { NotFound } = require("../utils/status")


const getAllCharactersService = async (req) => {
    try {
        const condition = req.query
        const characters = await charactersRepository.getAllCharacters({attributes: ['id','name']})
        const data = characters.map(character=>{
            const {id, ...rest} = character.toJSON();
            return {
                ...rest,
                url:`${process.env.BASE_URL}/characters/${character.id}`
            }
        })
        return data
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