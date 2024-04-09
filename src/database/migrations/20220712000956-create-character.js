'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Characters', {
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
        type: Sequelize.DECIMAL(10,2)
      },
      sizes: {
        type: Sequelize.STRING
      },
      idol_groupId: {
        type: Sequelize.INTEGER
      },
      subunitId: {
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
      seiyuuId: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Character');
  }
};