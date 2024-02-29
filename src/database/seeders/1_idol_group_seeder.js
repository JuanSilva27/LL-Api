'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('idol_group', [
      {
        name: 'μ\'s',
        photo: 'https://example.com/muse.jpg',
        logo: 'https://example.com/muse_logo.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Aqours',
        photo: 'https://example.com/aqours.jpg',
        logo: 'https://example.com/aqours_logo.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Add more idol_groups as needed
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
