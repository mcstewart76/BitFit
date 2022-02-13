const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', (req, res) => {

  res.render('homepage');
});


router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/signup', (req, res) => {

  res.render('signup');
});

router.get('/homepage', (req, res) => {

  res.render('homepage');
});

module.exports = router;
