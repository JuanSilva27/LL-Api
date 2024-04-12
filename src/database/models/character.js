'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {

    static associate(models) {
      this.belongsTo(models.Idol_group, { as: 'idolGroup',foreignKey: "idol_groupId" });
      this.belongsTo(models.Subunit, {as:'subunit', foreignKey: "subunitId" });
      this.belongsTo(models.Seiyuu, {as:'seiyuu', foreignKey: "seiyuuId" });
      this.belongsToMany(models.Song, { through: 'CharacterSongs',as: 'songs', foreignKey: "id_character" });
    }
  }
  Character.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthday: {
      type: DataTypes.STRING,
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    height: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    sizes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idol_groupId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subunitId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true
    },
    signature: {
      type: DataTypes.STRING,
      allowNull: true
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    seiyuuId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Character',
    tableName: 'characters',
    timestamps: true,
  });
  return Character;
};