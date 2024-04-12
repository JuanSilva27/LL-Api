'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Song', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      idol_groupId: {
        type: Sequelize.INTEGER
      },
      subunitId: {
        type: Sequelize.INTEGER
      },
      photo: {
        type: Sequelize.STRING
      },
      link: {
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

    await queryInterface.addConstraint('Song', {
      fields: ['idol_groupId'],
      type: 'foreign key',
      name: 'fk_song_idol_groupId',
      references: {
        table: 'idol_group',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    await queryInterface.addConstraint('Song', {
      fields: ['subunitId'],
      type: 'foreign key',
      name: 'fk_song_subunitId',
      references: {
        table: 'subunit',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Song');
  }
};