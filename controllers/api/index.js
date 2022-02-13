const router = require('express').Router();
const userRoutes = require('./userRoutes');
const authRoutes = require('./authRoutes');
const NFTRoutes = require('./NFTRoutes');

router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/nft', NFTRoutes);

module.exports = router;
