const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const NFTRoutes = require('./NFTRoutes')

router.use('/', homeRoutes);
router.use('/nft', NFTRoutes)
router.use('/api', apiRoutes);

module.exports = router;
