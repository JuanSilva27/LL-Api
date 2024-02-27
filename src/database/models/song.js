'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Group,{foreignKey: "groupId"});
      this.belongsTo(models.Subunit,{foreignKey: "subunitId"});
      this.belongsToMany(models.Character,{through: "charactersongs", foreignKey:"id_song"});
    }
  }
  Song.init({
    name: DataTypes.STRING,
    groupId: DataTypes.INTEGER,
    subunitId: DataTypes.INTEGER,
    photo: DataTypes.STRING,
    link: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Song',
    timestamps: true,
    paranoid: true
  });
  return Song;
};