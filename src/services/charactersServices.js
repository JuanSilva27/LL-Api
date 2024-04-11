const charactersRepository = require("../repositories/characterRepository")
const { Idol_group } = require("../database/models")
const { Subunit } = require("../database/models")
const { Seiyuu } = require("../database/models")
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
            throwError('Character not found', NotFound)
        }

        const result = {
            ...character.toJSON(),
            idolGroup: {
                name: character.idolGroup ? character.idolGroup.name : null,
                url: character.idolGroup ? `${process.env.BASE_URL}/idolGroups/${character.idolGroup.id}` : null
            },
            subunit: {
                name: character.subunit ? character.subunit.name : null,
                url: character.subunit ? `${process.env.BASE_URL}/subunits/${character.subunit.id}` : null
            },
            seiyuu: {
                name: character.seiyuu ? character.seiyuu.name : null,
                url: character.seiyuu ? `${process.env.BASE_URL}/seiyuus/${character.seiyuu.id}` : null
            },

        }

        return result
    } catch (error) {
        throw error
    }
}

module.exports = { getAllCharactersService, getCharacterByIdService }