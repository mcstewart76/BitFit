const basePath = process.cwd();
const { startCreating, buildSetup } = require(`${basePath}/utils/nftlib/src/main.js`);

(() => {
  buildSetup();
  startCreating();
})();
