const sequelize = require('../config/connection');
const { User, Nftitems } = require('../models');

const userData = require('./userData.json');
const nftItems = require('./nftItems.json');
const closetItems = require('./closetsItems.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, nftItems, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
