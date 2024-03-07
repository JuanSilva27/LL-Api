const { getAllSubunitService, getSubunitByIdService } = require("../services/subunitServices");
const { OK } = require("../utils/status");

const getAllSubunits = async (req, res, next) => {
    try {
        const result = await getAllSubunitService(req);

        res.status(OK).json({
            data: result
        });
    }
    catch (error) {
        return res.status(error.status).json({ status: error.status, error: error.message })
    }
};

const getSubunitById = async (req, res, next) => {
    try {
        const result = await getSubunitByIdService(req)

        res.status(OK).json({
            data: result
        });

    } catch (error) {
        return res.status(error.status).json({ status: error.status, error: error.message })
    }
}


module.exports = { getAllSubunits, getSubunitById }