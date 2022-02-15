const User = require('./user');
const Nftitems = require('./nftitems');
const Closetitems = require('./closetitems');


User.hasMany(Closetitems, {
    foreignKey: 'user_id',
  });
  

  Closetitems.belongsTo(User, {
    foreignKey: 'user_id'
  });
  

  User.hasMany(Nftitems, {
    foreignKey: 'user_id'
  });
  

  Nftitems.belongsTo(Closetitems, {
    foreignKey: 'closet_id'
  });
  

module.exports = { User, Nftitems, Closetitems };
