const {Seiyuu} = require ("../database/models")

const getAllSeiyuus = async (condition) =>{
    const result = await Seiyuu.findAll(condition);
    return result
}

const getSeiyuuById = async (id) =>{
   return await Seiyuu.findByPk(id);
}

module.exports= {getAllSeiyuus,getSeiyuuById};