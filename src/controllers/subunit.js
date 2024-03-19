const { getAllSubunitService, getSubunitByIdService } = require("../services/subunitServices");
const { OK } = require("../utils/status");

const getAllSubunits = async (req, res, next) => {
    try {
        const result = await getAllSubunitService(req);

        res.status(OK).json({
              result
        });
    }
    catch (error) {
        next(error)
    }
};

const getSubunitById = async (req, res, next) => {
    try {
        const result = await getSubunitByIdService(req)

        res.status(OK).json({
              result
        });

    } catch (error) {
        next(error)
    }
}


module.exports = { getAllSubunits, getSubunitById }