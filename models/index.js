const User = require('./user');
const Nftitems = require('./nftitems');
const NftAttributes = require('./nftAttributes');
// const Closetitems = require('./closetitems');


// User.hasMany(Closetitems, {
//     foreignKey: 'user_id',
//   });
  

  // Closetitems.belongsTo(User, {
  //   foreignKey: 'user_id'
  // });
  

  User.hasMany(Nftitems, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });
  

  // Nftitems.belongsTo(Closetitems, {
  //   foreignKey: 'closet_id'
  // });

  Nftitems.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });
  
Nftitems.hasMany(NftAttributes, {

  foreignKey: 'nft_item_id',
  onDelete: 'CASCADE',
})


NftAttributes.belongsTo(Nftitems, {
  foreignKey: 'nft_item_id',
  onDelete: 'CASCADE',
});



module.exports = { User, Nftitems, NftAttributes};
