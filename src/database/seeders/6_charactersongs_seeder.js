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
      {
        id_character: 2,
        id_song: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_character: 2,
        id_song: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_character: 2,
        id_song: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_character: 3,
        id_song: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_character: 2,
        id_song: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_character: 3,
        id_song: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_character: 4,
        id_song: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_character: 4,
        id_song: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_character: 4,
        id_song: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_character: 5,
        id_song: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_character: 5,
        id_song: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_character: 5,
        id_song: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_character: 6,
        id_song: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_character: 6,
        id_song: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_character: 6,
        id_song: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_character: 7,
        id_song: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_character: 7,
        id_song: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_character: 7,
        id_song: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_character: 8,
        id_song: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_character: 8,
        id_song: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_character: 8,
        id_song: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_character: 9,
        id_song: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_character: 9,
        id_song: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_character: 9,
        id_song: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }


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
