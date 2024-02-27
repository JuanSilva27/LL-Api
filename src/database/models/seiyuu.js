'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seiyuu extends Model {
    
    static associate(models) {
      this.hasOne(models.Character,{foreignKey: "seiyuuId"});
    }
  }
  Seiyuu.init({
    name: DataTypes.STRING,
    birthday: DataTypes.STRING,
    age: DataTypes.INTEGER,
    height: DataTypes.DECIMAL,
    twitter: DataTypes.STRING,
    instagram: DataTypes.STRING,
    description: DataTypes.STRING,
    photo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Seiyuu',
    timestamps: true,
    paranoid: true
  });
  return Seiyuu;
};