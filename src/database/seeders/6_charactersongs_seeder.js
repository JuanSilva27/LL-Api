'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const relations =[]

    const charactersongs = { /* aqui estan las relaciones entre las canciones y los personajes que interpretan dichas canciones */
      1:[1,2,3,4,5,6,7,8,9],
      2:[1,2,3,4,5,6,7,8,9],
      3:[1,2,3,4,5,6,7,8,9],
    }

    for (const [charcterId, songIds] of Object.entries(charactersongs)){
      songIds.forEach(songId=>{
        relations.push({
          id_character: parseInt(charcterId),
          id_song: songId,
          createdAt: new Date(),
          updatedAt: new Date()
        })
      })
    }

    await queryInterface.bulkInsert('Charactersongs',relations,{});
   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
