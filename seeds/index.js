const sequelize = require('../config/connection');
const seedClosets = require(../models/closetitems);
const seedNfts = require();
const user = require();

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await ();

  await ();

  process.exit(0);
};

seedAll();
