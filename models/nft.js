const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Nft extends Model {}

Nft.init(
    {
       id: {
           type: DataTypes.INTEGER,
           allowNull: false,
           primaryKey: true,
           autoIncrement: true,
       },
       title: {
           type: DataTypes.STRING,
           allowNull: false,
       },
       numberOfViews: {
           type: DataTypes.INTEGER,
           allowNull: false,
           autoIncrement: true,
       },
       asset_id: {
           type: DataTypes.STRING,
           allowNull: false,
       },
       blockchain_id: {
        type: DataTypes.STRING,
        allowNull: false,
       },
    }   
)

{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'nft',
  }
);

module.exports = Nft;

