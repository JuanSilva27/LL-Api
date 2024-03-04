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
      {
        name: 'CYaRon!',
        photo: 'https://example.com/cyaron.jpg',
        logo: 'https://example.com/cyaron_logo.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'AZALEA',
        photo: 'https://example.com/azalea.jpg',
        logo: 'https://example.com/azalea_logo.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Guilty Kiss',
        photo: 'https://example.com/guiltikiss.jpg',
        logo: 'https://example.com/guiltikiss.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'AZUNA',
        photo: 'https://example.com/azuna.jpg',
        logo: 'https://example.com/azuna_logo.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: ' QU4RTZ',
        photo: 'https://example.com/qu4rtz.jpg',
        logo: 'https://example.com/qu4rtz_logo.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'DiverDiva',
        photo: 'https://example.com/diverdiva.jpg',
        logo: 'https://example.com/diverdiva_logo.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'R3BIRTH',
        photo: 'https://example.com/r3birth.jpg',
        logo: 'https://example.com/r3birth.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'CatChu!',
        photo: 'https://example.com/catchu!.jpg',
        logo: 'https://example.com/catchu!_logo.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'KALEIDOSCORE',
        photo: 'https://example.com/kaleidoscore.jpg',
        logo: 'https://example.com/kaleidoscore_logo.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '5yncri5e!',
        photo: 'https://example.com/5yncri5e!.jpg',
        logo: 'https://example.com/5yncri5e!_logo.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cerise Bouquet',
        photo: 'https://example.com/cerisebouquet.jpg',
        logo: 'https://example.com/cerisebouquet.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'DOLLCHESTRA',
        photo: 'https://example.com/dollchestra.jpg',
        logo: 'https://example.com/dollchestra.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mira-Cra Park!',
        photo: 'https://example.com/mira-crapark!.jpg',
        logo: 'https://example.com/mira-crapark!.jpg',
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
