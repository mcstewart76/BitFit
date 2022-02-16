const sequelize = require('../config/connection');
const { User, Nftitems, NftAttributes} = require('../models');

const userData = require('./userData.json');
const nftItems = require('./nftItems.json');
const nftAttr = require('./nftAttributes.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });


  await Nftitems.bulkCreate(nftItems, {
    individualHooks: true,
    returning: true,
  });

  await NftAttributes.bulkCreate(nftAttr, {
    individualHooks: true,
    returning: true,
  });


  process.exit(0);
};




seedDatabase();
