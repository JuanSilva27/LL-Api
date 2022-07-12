'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Characters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Characters.init({
    name: DataTypes.STRING,
    birthday: DataTypes.STRING,
    age: DataTypes.INTEGER,
    height: DataTypes.DECIMAL,
    sizes: DataTypes.STRING,
    group: DataTypes.INTEGER,
    subunit: DataTypes.INTEGER,
    color: DataTypes.STRING,
    signature: DataTypes.STRING,
    photo: DataTypes.STRING,
    seiyuu: DataTypes.INTEGER,
    description: DataTypes.STRING,
    icon: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Characters',
  });
  return Characters;
};