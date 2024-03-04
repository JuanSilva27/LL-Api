'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const relations =[]

    const charactersongs = { /* aqui estan las relaciones entre las canciones y los personajes que interpretan dichas canciones */
      1:[1,2,3,4,5,6,7,8,9], /* cada cancin tiene un array de numeros que son los id de los personajes que interpretan dicha cancion  */
      2:[1,2,3,4,5,6,7,8,9],
      3:[1,2,3,4,5,6,7,8,9],
      4:[1,2,3,4,5,6,7,8,9],
      5:[1,3,7],
      6:[1,3,7],
      7:[2,6,9],
      8:[2,6,9],
      9:[4,5,8],
      10:[4,5,8],
      11:[1,2,3,4,5,6,7,8,9],
      12:[1,2,3,4,5,6,7,8,9],
      13:[1,2,3,4,5,6,7,8,9],
      14:[1,2,3,4,5,6,7,8,9],
      15:[1,2,3,4,5,6,7,8,9],
      16:[1,2,3,4,5,6,7,8,9],
      17:[1,2,3,4,5,6,7,8,9],
      18:[1,2,3,4,5,6,7,8,9],
      19:[1,2,3,4,5,6,7,8,9],
      20:[1,2,3,4,5,6,7,8,9],
      21:[1,2,3,4,5,6,7,8,9],
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

  }
};
