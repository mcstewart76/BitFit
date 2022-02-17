const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Nftitems extends Model {}

Nftitems.init(
    {
    //    id: {
    //        type: DataTypes.INTEGER,
    //        allowNull: true,
    //        primaryKey: true,
    //        autoIncrement: true,
    //     // references: {
    //     //         model: 'nft_items',
    //     //         key: 'edition',
    //     //         unique: false
    //     //       }
    //    },
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
            primaryKey: true,
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
       