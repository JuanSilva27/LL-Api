const seiyuuRepositry = require('../repositories/seiyuuRepositry')
const { throwError } = require('../utils/errorHandle')
const { ISError, NotFound } = require('../utils/status')


const getAllSeiyuuService = async (req) =>{
    try {
        const condition = req.query
        const seiyuu = await seiyuuRepositry.getAllSeiyuus(condition)
        return seiyuu
    } catch (error) {
        throwError(error.message, ISError)
    }
}

const getSeiyuuByIdService = async (req) =>{
    try {
        const {id} = req.params
        const song = await seiyuuRepositry.getSeiyuuById(id)
        if(!song){
            throwError('Seiyuu not found', NotFound)
        }
        return song
    } catch (error) {
        throwError(error.message, error.status)
    }
}


module.exports= {getAllSeiyuuService, getSeiyuuByIdService}