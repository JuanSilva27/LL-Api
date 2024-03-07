const { getAllIdolGroupsService, getIdolGroupByIdService } = require('../services/idolGroupServices')
const { OK } = require("../utils/status");

const getAllIdolGroups = async (req, res, next) => {
    try {
        const result = await getAllIdolGroupsService(req)

        res.status(OK).json({
            data: result
        });
    }
    catch (error) {
        return res.status(error.status).json({ status: error.status, error: error.message })
    }
};

const getIdolGroupById = async (req, res, next) => {
    try {
        const result = await getIdolGroupByIdService(req)
        res.status(OK).json({
            data: result
        });

    } catch (error) {
        return res.status(error.status).json({ status: error.status, error: error.message })
    }
}


module.exports = { getAllIdolGroups, getIdolGroupById }