'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Charactersongs', [
      {
        id_character: 1,
        id_song: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_character: 1,
        id_song: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_character: 1,
        id_song: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },


    ], {});
   
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
