const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class NftitemsAttr extends Model {}

NftitemsAttr.init(
    {
       id: {
           type: DataTypes.INTEGER,
           allowNull: false,
           primaryKey: true,
           autoIncrement: true,
       },
       ntf_item_id: {
            type: DataTypes.STRING,
            references: {
                model: 'nftitems',
                key: 'id',
                unique: false
              }
       },
       

       nft_attributes_id:{
        type: DataTypes.INTEGER,
        references: {
            model: 'nftAttribute',
            key: 'id',
            unique: false
          }
        }
       



    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'nftitemsattr',
        
      }  
  );

module.exports = NftitemsAttr;
       