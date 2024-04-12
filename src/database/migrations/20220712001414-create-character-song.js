'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CharacterSongs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_character: {
        type: Sequelize.INTEGER
      },
      id_song: {
        type: Sequelize.INTEGER
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

    await queryInterface.addConstraint('CharacterSongs', {
      fields: ['id_character'],
      type: 'foreign key',
      name: 'fk_character_songs_character_id',
      references: {
        table: 'characters',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    await queryInterface.addConstraint('CharacterSongs', {
      fields: ['id_song'],
      type: 'foreign key',
      name: 'fk_character_songs_song_id',
      references: {
        table: 'songs',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CharacterSongs');
  }
};