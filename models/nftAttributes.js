const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class NftAttributes extends Model {}

NftAttributes.init(
    {
       id: {
           type: DataTypes.INTEGER,
           allowNull: false,
           primaryKey: true,
           autoIncrement: true,
       },
       trait_type: {
            type: DataTypes.STRING,
            allowNull: false,
       },
       value: {
           type: DataTypes.STRING,
       },
       
       nft_item_id:{
        type: DataTypes.INTEGER,
        references: {
            model: 'nft_items',
            key: 'edition',
            unique: false
          }

       }
      

    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'nftAttribute',
        
      }  
  );

module.exports = NftAttributes;
       