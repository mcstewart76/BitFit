const router = require('express').Router();
const { render, send } = require('express/lib/response');
require('../../utils/GoogleAuth');
const passport = require('passport');
const { User } = require('../../models');





router.get('/google', passport.authenticate('google',{scope:['profile']}))

// router.get('/google', passport.authenticate('google'))



router.get('/google/callback', async (req, res) => {
  try {
    await passport.authenticate('google',{
      successRedirect: res.render('dashboard'),
      failureRedirect: '/failure',

    })
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/failure', async (req, res) => {
  try {
    res.send('something went wrong')
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



module.exports = router;
