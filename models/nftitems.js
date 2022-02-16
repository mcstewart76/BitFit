const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Nftitems extends Model {}

Nftitems.init(
    {
       id: {
           type: DataTypes.INTEGER,
           allowNull: false,
           primaryKey: true,
           autoIncrement: true,
       },
       name: {
            type: DataTypes.STRING,
            allowNull: false,
       },
       type: {
           type: DataTypes.STRING,
       },
       numberOfViews: {
            type: DataTypes.INTEGER,
            allowNull: false,
       },
       blockchain_id: {
            type: DataTypes.STRING,
            allowNull: false,
       },
    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'nftitems',
        
      }  
  );

module.exports = Nftitems;
       