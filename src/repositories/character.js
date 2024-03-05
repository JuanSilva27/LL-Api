const {Character} = require ("../database/models")

const getAllCharacters = async () =>{
    const result = await Character.findAll();
    return result
}

const getCharacterById = async (id) =>{
   return await Character.findOne(id);
}

module.exports= {getAllCharacters,getCharacterById};