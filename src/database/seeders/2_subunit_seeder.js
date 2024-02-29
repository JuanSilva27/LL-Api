'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Subunit', [
      {
        name: 'Printemps',
        photo: 'https://example.com/printemps.jpg',
        logo: 'https://example.com/printemps_logo.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lily White',
        photo: 'https://example.com/lily_white.jpg',
        logo: 'https://example.com/lily_white_logo.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'BiBi',
        photo: 'https://example.com/bibi.jpg',
        logo: 'https://example.com/bibi_logo.jpg',
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
