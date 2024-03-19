const seiyuuRepositry = require('../repositories/seiyuuRepository')
const { throwError } = require('../utils/errorHandle')
const { ISError, NotFound } = require('../utils/status')


const getAllSeiyuuService = async (req) =>{
    try {
        const condition = req.query
        const seiyuus = await seiyuuRepositry.getAllSeiyuus(condition)
        return seiyuus
    } catch (error) {
        throw error
    }
}

const getSeiyuuByIdService = async (req) =>{
    try {
        const {id} = req.params
        const seiyuu = await seiyuuRepositry.getSeiyuuById(id)
        if(!seiyuu){
            throwError('Seiyuu not found', NotFound)
        }
        return seiyuu
    } catch (error) {
        throw error
    }
}


module.exports= {getAllSeiyuuService, getSeiyuuByIdService}