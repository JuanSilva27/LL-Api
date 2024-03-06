const {Character} = require ("../database/models")

const getAllCharacters = async (condition) =>{
    const result = await Character.findAll(condition);
    return result
}

const getCharacterById = async (id) =>{
   return await Character.findByPk(id);
}

module.exports= {getAllCharacters,getCharacterById};