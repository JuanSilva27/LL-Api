'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    
    static associate({Group,Subunit,Seiyuu,Charactersong}) {
      this.belongsTo(Group,{foreignKey: "groupId"});
      this.belongsTo(Subunit,{foreignKey: "subunitId"});
      this.belongsTo(Seiyuu,{foreignKey: "seiyuuId"});
      this.belongsToMany(Charactersong,{foreignKey: "id_character"});
    }
  }
  Character.init({
    name: DataTypes.STRING,
    birthday: DataTypes.STRING,
    age: DataTypes.INTEGER,
    height: DataTypes.DECIMAL,
    sizes: DataTypes.STRING,
    groupId: DataTypes.INTEGER,
    subunitId: DataTypes.INTEGER,
    color: DataTypes.STRING,
    signature: DataTypes.STRING,
    photo: DataTypes.STRING,
    seiyuuId: DataTypes.INTEGER,
    description: DataTypes.STRING,
    icon: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Character',
    timestamps: true,
    paranoid: true
  });
  return Character;
};