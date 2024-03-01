'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const relations =[]

    const charactersongs = { /* aqui estan las relaciones entre las canciones y los personajes que interpretan dichas canciones */
      1:[1,2,3,4,5,6,7,8,9], /* cada cancin tiene un array de numeros que son los id de los personajes que interpretan dicha cancion  */
      2:[1,2,3,4,5,6,7,8,9],
      3:[1,2,3,4,5,6,7,8,9],
    }

    for (const [songId,charcterIds] of Object.entries(charactersongs)){
      charcterIds.forEach(charcterId=>{
        relations.push({
          id_character: parseInt(charcterId),
          id_song: parseInt(songId),
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
