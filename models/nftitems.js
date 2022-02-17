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
        image: {
            type: DataTypes.STRING,
            allowNull: false,
       },
       dna: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        edition: {
            type: DataTypes.INTEGER,
            allowNull: false,
            },
        date: {
                type: DataTypes.DATE,
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
        modelName: 'nft_items',
        
      }  
  );

module.exports = Nftitems;
       