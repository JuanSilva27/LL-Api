const subunitRepository = require('../repositories/subunitRepository')
const { throwError } = require('../utils/errorHandle')
const { ISError, NotFound } = require('../utils/status')


const getAllSubunitService = async (req) =>{
    try {
        const condition = req.query
        const subunits = await subunitRepository.getAllSubunit(condition)
        return subunits
    } catch (error) {
        throwError(error.message, ISError)
    }
}

const getSubunitByIdService = async (req) =>{
    try {
        const {id} = req.params
        const subunit = await subunitRepository.getSubunitById(id)
        if(!subunit){
            throwError('Sub unit not found', NotFound)
        }
        return subunit
    } catch (error) {
        throwError(error.message, error.status)
    }
}


module.exports= {getAllSubunitService, getSubunitByIdService}