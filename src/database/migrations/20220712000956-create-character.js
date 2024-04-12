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
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Idol_group',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      subunitId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'Subunit',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'Seiyuu',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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

    await queryInterface.addConstraint('Characters', {
      fields: ['idol_groupId'],
      type: 'foreign key',
      name: 'fk_characters_idol_groupId',
      references: {
        table: 'idol_group',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    await queryInterface.addConstraint('Characters', {
      fields: ['subunitId'],
      type: 'foreign key',
      name: 'fk_characters_subunitId',
      references: {
        table: 'subunit',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    await queryInterface.addConstraint('Characters', {
      fields: ['seiyuuId'],
      type: 'foreign key',
      name: 'fk_characters_seiyuuId',
      references: {
        table: 'seiyuu',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Character');
  }
};