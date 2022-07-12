'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seiyuus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Seiyuus.init({
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
    modelName: 'Seiyuus',
  });
  return Seiyuus;
};