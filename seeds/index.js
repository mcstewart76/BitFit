const sequelize = require('../config/connection');
const seedUser = require('../models/user');
const seedNfts = require('../models/nftItems');
const seedNftAttr = require('../models/nftAttributes');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await (seedUser);
  await (seedNftAttr);
  await (seedNfts);
  

  

  process.exit(0);
};

seedAll();
