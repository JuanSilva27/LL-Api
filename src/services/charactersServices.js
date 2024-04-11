const charactersRepository = require("../repositories/characterRepository")
const { Idol_group } = require("../database/models")
const { Subunit } = require("../database/models")
const { Seiyuu } = require("../database/models")
const { throwError } = require("../utils/errorHandle")
const { NotFound } = require("../utils/status");
const { paginated } = require("./paginated.service");
const { getAttributeValue } = require("../utils/getAttributeValue")


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
        const character = await charactersRepository.getOneCharacter({
            where: { id },
            include: [
                { model: Idol_group, as: 'idolGroup', attributes: ["name", 'id'] },
                { model: Subunit, as: 'subunit', attributes: ["name", 'id'] },
                { model: Seiyuu, as: 'seiyuu', attributes: ["name", 'id'] },
            ],
            attributes: { exclude: ['idol_groupId', 'subunitId', 'seiyuuId', 'createdAt', 'updatedAt'] }
        })
        if (!character) {
            throwError(`Character with ID ${id} not found`, NotFound)
        }

        const result = {
            ...character.toJSON(),
            idolGroup: getAttributeValue(character, 'idolGroup'),
            subunit: getAttributeValue(character, 'subunit'),
            seiyuu: getAttributeValue(character, 'seiyuu')

        }

        return result
    } catch (error) {
        throw error
    }
}

module.exports = { getAllCharactersService, getCharacterByIdService }