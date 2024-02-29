'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Seiyuu', [
      {
        name: 'Nitta Emi',
        birthday: 'December 10',
        age: 38,
        height: 1.53,
        twitter: 'https://twitter.com/nittaemi85',
        instagram: 'https://www.instagram.com/tnstagram1210',
        description: 'Emi Nitta is a Japanese actress, voice actress, and singer from Nagano Prefecture.',
        photo: 'https://example.com/emitta.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Agrega más objetos para más Seiyuus si lo deseas
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
