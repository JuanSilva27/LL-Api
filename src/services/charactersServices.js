const charactersRepository = require("../repositories/characterRepository")
const idolGroupRepository = require("../repositories/idolGroupRepository")
const subunitRepository = require("../repositories/subunitRepository")
const seiyuuRepository = require("../repositories/seiyuuRepository")
const { throwError } = require("../utils/errorHandle")
const { NotFound } = require("../utils/status");
const { paginated } = require("./paginated.service");


const getAllCharactersService = async (req) => {
    try {
        const { limit, offset } = req.query
        const characters = await charactersRepository.getAllCharacters({ attributes: ['id', 'name'] })
        const data = characters.map(character => {
            const { id, ...rest } = character.toJSON();
            return {
                ...rest,
                url: `${process.env.BASE_URL}/characters/${character.id}`
            }
        })
        const dataPaginated = paginated(data, limit, offset)
        return dataPaginated
    } catch (error) {
        throw error
    }
};

const getCharacterByIdService = async (req) => {
    try {
        const { id } = req.params
        const character = await charactersRepository.getCharacterById(id)
        if (!character) {
            throwError('Character not found', NotFound)
        }

        const idolGroup = await idolGroupRepository.getIdolGroupById(character.idol_groupId)
        const subunit = await subunitRepository.getSubunitById(character.subunitId)
        const seiyuu = await seiyuuRepository.getSeiyuuById(character.seiyuuId)

        const result = {
            ...character.toJSON(),
            idol_groupId: {
                name: idolGroup ? idolGroup.name : null,
                url: idolGroup ? `${process.env.BASE_URL}/idolGroups/${idolGroup.id}` : null
            },
            subunitId: { 
                name: subunit ? subunit.name : null,
                url: subunit ? `${process.env.BASE_URL}/subunits/${subunit.id}` : null 
            },
            seiyuuId: {
                name: seiyuu ? seiyuu.name : null,
                url: seiyuu ? `${process.env.BASE_URL}/seiyuus/${seiyuu.id}` : null
            },

        }

        return result
    } catch (error) {
        throw error
    }
}

module.exports = { getAllCharactersService, getCharacterByIdService }