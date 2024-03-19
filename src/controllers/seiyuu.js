const { getAllSeiyuuService, getSeiyuuByIdService } = require('../services/seiyuuServices')
const { OK } = require("../utils/status");

const getAllSeiyuus = async (req, res, next) => {
    try {
        const result = await getAllSeiyuuService(req);

        res.status(OK).json({
            data: result
        });
    }
    catch (error) {
        next(error)
    }
};

const getSeiyuuById = async (req, res, next) => {
    try {
        const result = await getSeiyuuByIdService(req)
        console.log(result)

        res.status(OK).json({
            data: result
        });

    } catch (error) {
        next(error)
    }
}


module.exports = { getAllSeiyuus, getSeiyuuById }