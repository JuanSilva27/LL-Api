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
    id_character:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_song:{
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'CharacterSongs',
    timestamps: true,
    paranoid: true
  });
  return CharacterSongs;
};