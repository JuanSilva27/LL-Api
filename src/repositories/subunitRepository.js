const {Subunit} = require('../database/models')

const getAllSubunit = async (condition)=>{
    const result = await Subunit.findAll()
    return result
}

const getSubunitById = async (id)=>{
    const result = await Subunit.findByPk(id)
    return result
}

module.exports = {getAllSubunit, getSubunitById}