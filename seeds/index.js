const sequelize = require('../config/connection');
const seedUser = require('../models/user');
const seedClosets = require('../models/closetitems');
const seedNfts = require('../models/nftitems');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await (seedUser);

  await (seedClosets);

  await (seedNfts);

  process.exit(0);
};

seedAll();
