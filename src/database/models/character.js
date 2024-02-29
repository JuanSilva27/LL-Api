'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {

    static associate({ Group, Subunit, Seiyuu, Charactersong }) {
      this.belongsTo(Group, { foreignKey: "groupId" });
      this.belongsTo(Subunit, { foreignKey: "subunitId" });
      this.belongsTo(Seiyuu, { foreignKey: "seiyuuId" });
      this.belongsToMany(Charactersong, { foreignKey: "id_character" });
    }
  }
  Character.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthday: {
      type: DataTypes.STRING,
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    height: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    sizes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subunitId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true
    },
    signature: {
      type: DataTypes.STRING,
      allowNull: true
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    seiyuuId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Character',
    tableName: 'characters',
    timestamps: true,
    paranoid: true
  });
  return Character;
};