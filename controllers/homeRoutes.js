const router = require('express').Router();
const { User, Nftitems, NftAttributes } = require('../models');
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

router.get('/homepage', async (req, res) => {
  try {
    var nfts = await Nftitems.findAll();

    const nftimages = nfts.map((images) =>
      images.get("image")
    );

    res.render('homepage', { nftimages });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }


});

router.get('/about', (req, res) => {

  res.render('about');
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {

    var nftsData = await Nftitems.findAll(

      {
        where: {
          id: req.session.user_id
        }
      },
      {

        include: [{
          model: User,
          attributes: ['email', 'name'],
        }
        ],
      });

    if (!nftsData) {
      res.status(404).json({ message: `No NFT found for ${nftsData.email}` });
      return;
    }

    // res.status(200).json(nftsData);
    res.render('homepage', { nftsData });
  } catch (err) {
    res.status(500).json(err);
  }
});



res.render('dashboard');


router.get('/nft', (req, res) => {

  res.render('nft');
});

module.exports = router;
