'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Characters', [
      {
        name: 'Honoka Kousaka',
        birthday: 'August 16',
        age: 16,
        height: 1.57,
        sizes: '78/58/82',
        groupId: 1,
        subunitId: 1,
        color: '#e2732d',
        signature: 'HonokaSignatureUrl',
        photo: 'Url',
        seiyuuId: 1,
        description: 'She is one of the nine protagonists of Love Live! and the leader of μ´s.',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
