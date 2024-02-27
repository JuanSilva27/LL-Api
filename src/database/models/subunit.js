'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subunit extends Model {
   
    static associate(models) {
      this.hasMany(models.Character,{foreignKey:"subunitId"});
      this.hasMany(models.Song, {foreignKey:"subunitId"});
    }
  }
  Subunit.init({
    name: DataTypes.STRING,
    photo: DataTypes.STRING,
    logo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Subunit',
    timestamps: true,
    paranoid: true
  });
  return Subunit;
};