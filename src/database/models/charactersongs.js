'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CharacterSongs extends Model {
    
    static associate(models) {
      this.belongsTo(models.Character,{foreignKey: "id_character"});
      this.belongsTo(models.song,{foreignKey: "id_song"});
    }
  }
  CharacterSongs.init({
    id_character: DataTypes.INTEGER,
    id_song: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CharacterSongs',
    timestamps: true,
    paranoid: true
  });
  return CharacterSongs;
};