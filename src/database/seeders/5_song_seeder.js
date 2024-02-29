'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Song', [
      {
        name: 'Bokura no LIVE Kimi to no LIFE',
        idol_group: 1,
        photo: 'https://example.com/snow_halation.jpg',
        link: 'https://www.youtube.com/watch?v=WW8B_qEy2hI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Snow Halation',
        idol_group: 1,
        photo: 'https://example.com/snow_halation.jpg',
        link: 'https://www.youtube.com/watch?v=WW8B_qEy2hI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'START:DASH!!',
        idol_group: 1,
        photo: 'https://example.com/start_dash.jpg',
        link: 'https://www.youtube.com/watch?v=d4KYtTy_h4s',
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
