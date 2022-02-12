const router = require('express').Router();
const userRoutes = require('./userRoutes');
const oidcRoutes = require('./userOidcRoutes');

router.use('/users', userRoutes);
router.use('/oidc', oidcRoutes);

module.exports = router;
