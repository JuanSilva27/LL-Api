'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {

    static associate(models) {
      this.belongsTo(models.idol_group, { foreignKey: "idol_groupId" });
      this.belongsTo(models.Subunit, { foreignKey: "subunitId" });
      this.belongsToMany(models.Character, { through: "charactersongs", foreignKey: "id_song" });
    }
  }
  Song.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idol_groupId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subunitId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    link: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Song',
    timestamps: true,
    paranoid: true
  });
  return Song;
};