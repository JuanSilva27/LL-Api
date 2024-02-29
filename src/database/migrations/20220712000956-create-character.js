'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Character', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      birthday: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      height: {
        type: Sequelize.DECIMAL
      },
      sizes: {
        type: Sequelize.STRING
      },
      group: {
        type: Sequelize.INTEGER
      },
      subunit: {
        type: Sequelize.INTEGER
      },
      color: {
        type: Sequelize.STRING
      },
      signature: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
      },
      seiyuu: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      icon: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Characters');
  }
};