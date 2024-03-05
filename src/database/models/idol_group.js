'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Idol_group extends Model {
    static associate(models) {
      this.hasMany(models.Character, { foreignKey: "idol_groupId" });
      this.hasMany(models.Song, { foreignKey: "idol_groupId" });
    }
  }
  Idol_group.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Idol_group',
    timestamps: true,
  });
  return Idol_group;
};