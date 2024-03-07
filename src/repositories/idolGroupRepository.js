const {Idol_group} = require ("../database/models")

const getAllIdolGroups = async (condition) =>{
    const result = await Idol_group.findAll(condition);
    return result
}

const getIdolGroupById = async (id) =>{
   return await Idol_group.findByPk(id);
}

module.exports= {getAllIdolGroups,getIdolGroupById};