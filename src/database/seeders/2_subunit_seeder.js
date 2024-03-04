'use strict';

/** @type {import('sequelize-cli').Migration} */
const subunits = require('../../utils/subunit.json')
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Subunit', subunits.map(subunit =>({
      ...subunit,
      createdAt: new Date(),
      updatedAt: new Date()
    })), {});
    
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
