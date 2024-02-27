'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    static associate(models) {
      this.hasMany(models.Character, {foreignKey:"groupId"});
      this.hasMany(models.Song, {foreignKey:"groupId"});
    }
  }
  Group.init({
    name: DataTypes.STRING,
    photo: DataTypes.STRING,
    logo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Group',
    timestamps: true,
    paranoid: true
  });
  return Group;
};