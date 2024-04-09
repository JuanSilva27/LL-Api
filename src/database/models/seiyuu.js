'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seiyuu extends Model {

    static associate(models) {
      this.hasOne(models.Character, { foreignKey: "seiyuuId" });
    }
  }
  Seiyuu.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthday: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    height: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    twitter: {
      type: DataTypes.STRING,
      allowNull: true
    },
    instagram: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Seiyuu',
    tableName: 'seiyuu',
    timestamps: true,
  });
  return Seiyuu;
};