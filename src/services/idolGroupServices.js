const idolGroupRepository = require('../repositories/idolGroupRepository')
const { throwError } = require("../utils/errorHandle")
const { NotFound } = require("../utils/status")


const getAllIdolGroupsService = async (req) => {
    try {
        const condition = req.query
        const idolGroups = await idolGroupRepository.getAllIdolGroups(condition)
        return idolGroups
    } catch (error) {
        throw error
    }
};

const getIdolGroupByIdService = async (req) => {
    try {
        const { id } = req.params
        const idolGroup = await idolGroupRepository.getIdolGroupById(id)
        if(!idolGroup){
            throwError('Idol Group not found', NotFound)
        }
        return idolGroup
    } catch (error) {
        throw error
    }
}

module.exports = { getAllIdolGroupsService, getIdolGroupByIdService }