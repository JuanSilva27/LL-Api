'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Song', [
      {
        name: 'Bokura no LIVE Kimi to no LIFE',
        idol_groupId: 1,
        photo: 'https://example.com/snow_halation.jpg',
        link: 'https://www.youtube.com/watch?v=WW8B_qEy2hI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Yuujou no Change',
        idol_groupId: 1,
        photo: 'https://example.com/snow_halation.jpg',
        link: 'https://www.youtube.com/watch?v=WW8B_qEy2hI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Snow Halation',
        idol_groupId: 1,
        photo: 'https://example.com/snow_halation.jpg',
        link: 'https://www.youtube.com/watch?v=WW8B_qEy2hI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'baby maybe Koi no Button',
        idol_groupId: 1,
        photo: 'https://example.com/snow_halation.jpg',
        link: 'https://www.youtube.com/watch?v=WW8B_qEy2hI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sweet&Sweet Holiday',
        idol_groupId: 1,
        subunitId:1,
        photo: 'https://example.com/snow_halation.jpg',
        link: 'https://www.youtube.com/watch?v=WW8B_qEy2hI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Love Marginal',
        idol_groupId: 1,
        subunitId:1,
        photo: 'https://example.com/snow_halation.jpg',
        link: 'https://www.youtube.com/watch?v=WW8B_qEy2hI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Love Novels',
        idol_groupId: 1,
        subunitId:3,
        photo: 'https://example.com/snow_halation.jpg',
        link: 'https://www.youtube.com/watch?v=WW8B_qEy2hI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Diamond Princess no Yuutsu',
        idol_groupId: 1,
        subunitId:3,
        photo: 'https://example.com/snow_halation.jpg',
        link: 'https://www.youtube.com/watch?v=WW8B_qEy2hI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Shiranai Love * Oshiete Love',
        idol_groupId: 1,
        subunitId:2,
        photo: 'https://example.com/snow_halation.jpg',
        link: 'https://www.youtube.com/watch?v=WW8B_qEy2hI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Anone Ganbare!',
        idol_groupId: 1,
        subunitId:2,
        photo: 'https://example.com/snow_halation.jpg',
        link: 'https://www.youtube.com/watch?v=WW8B_qEy2hI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Natsuiro Egao de 1,2,Jump!',
        idol_groupId: 1,
        photo: 'https://example.com/snow_halation.jpg',
        link: 'https://www.youtube.com/watch?v=WW8B_qEy2hI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mermaid festa vol.1',
        idol_groupId: 1,
        photo: 'https://example.com/snow_halation.jpg',
        link: 'https://www.youtube.com/watch?v=WW8B_qEy2hI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Watashitachi wa Mirai no Hana',
        idol_groupId: 1,
        photo: 'https://example.com/snow_halation.jpg',
        link: 'https://www.youtube.com/watch?v=WW8B_qEy2hI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Spicaterrible',
        idol_groupId: 1,
        photo: 'https://example.com/snow_halation.jpg',
        link: 'https://www.youtube.com/watch?v=WW8B_qEy2hI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mo Hitori jyanaiyo',
        idol_groupId: 1,
        photo: 'https://example.com/snow_halation.jpg',
        link: 'https://www.youtube.com/watch?v=WW8B_qEy2hI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ai wa Taiyo jyanai?',
        idol_groupId: 1,
        photo: 'https://example.com/snow_halation.jpg',
        link: 'https://www.youtube.com/watch?v=WW8B_qEy2hI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mogyutto "Love" de Sekkinchu!',
        idol_groupId: 1,
        photo: 'https://example.com/snow_halation.jpg',
        link: 'https://www.youtube.com/watch?v=WW8B_qEy2hI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ashiteru Banzai',
        idol_groupId: 1,
        photo: 'https://example.com/snow_halation.jpg',
        link: 'https://www.youtube.com/watch?v=WW8B_qEy2hI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Wonderful Rush',
        idol_groupId: 1,
        photo: 'https://example.com/snow_halation.jpg',
        link: 'https://www.youtube.com/watch?v=WW8B_qEy2hI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Oh,Love&Peace!',
        idol_groupId: 1,
        photo: 'https://example.com/snow_halation.jpg',
        link: 'https://www.youtube.com/watch?v=WW8B_qEy2hI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'START:DASH!!',
        idol_groupId: 1,
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
