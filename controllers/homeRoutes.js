const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', (req, res) => {

  res.render('login');
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  // if (req.session.logged_in) {
  //   res.redirect('/');
  //   return;
  // }

  res.render('login');
});


router.get('/loginpage', (req, res) => {
  res.render('loginpage');
});

router.get('/signup', (req, res) => {

  res.render('signup');
});

router.get('/homepage', (req, res) => {

  res.render('homepage');
});


router.get('/dashboard', (req, res) => {

  res.render('dashboard');
});

router.get('/nft', (req, res) => {

  res.render('nft');
});

module.exports = router;
