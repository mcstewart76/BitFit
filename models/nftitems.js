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
       description: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        imageURI: {
            type: DataTypes.STRING,
            allowNull: false,
       },
       dna: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        edition: {
            type: DataTypes.STRING,
            allowNull: false,
            },
        date: {
                type: DataTypes.STRING,
                allowNull: false,
                },
       type: {
           type: DataTypes.STRING,
       },
       numberOfViews: {
            type: DataTypes.INTEGER,
            allowNull: true,
       },
       blockchain_id: {
            type: DataTypes.STRING,
            allowNull: true,
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
       