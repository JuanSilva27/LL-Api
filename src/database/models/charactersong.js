'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CharacterSong extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CharacterSong.init({
    id_character: DataTypes.INTEGER,
    id_song: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CharacterSong',
  });
  return CharacterSong;
};