const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', (req, res) => {

  res.render('homepage');
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  // if (req.session.logged_in) {
  //   res.redirect('/');
  //   return;
  // }

  res.render('login');
});
router.get('/chris', (req, res) => {
  

  res.render('homepage');
});
router.get('/loginpage', (req, res) => {
  

router.get('/signup', (req, res) => {

  res.render('signup');
});

router.get('/homepage', (req, res) => {

  res.render('homepage');
});

module.exports = router;
