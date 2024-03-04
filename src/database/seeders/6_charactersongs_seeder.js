'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const relations =[]
    /* aqui estan las relaciones entre las canciones y los personajes que interpretan dichas canciones */
    /* cada cancion tiene un array de numeros que son los id de los personajes que interpretan dicha cancion  */
    const charactersongs = require('../utils/charactersong.json')

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

  }
};
