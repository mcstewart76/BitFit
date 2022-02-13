const router = require('express').Router();
const userRoutes = require('./userRoutes');
const oidcRoutes = require('./userOidcRoutes');
const NFTRoutes = require('./NFTRoutes');

router.use('/users', userRoutes);
router.use('/oidc', oidcRoutes);
router.use('/nft', NFTRoutes);

module.exports = router;
