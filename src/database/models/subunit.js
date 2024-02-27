'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subunit extends Model {

    static associate(models) {
      this.hasMany(models.Character, { foreignKey: "subunitId" });
      this.hasMany(models.Song, { foreignKey: "subunitId" });
    }
  }
  Subunit.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Subunit',
    timestamps: true,
    paranoid: true
  });
  return Subunit;
};