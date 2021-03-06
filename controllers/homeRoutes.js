const router = require('express').Router();
const { User, Nftitems, NftAttributes } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', (req, res) => {
  console.log(req.session);
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

// Sign out route
router.get('/signout', (req, res) => {
  if (req.session.logged_in) {
    // Remove the session variables
    req.session.destroy(() => {
      res.redirect('/login');
    });
  } else {
    res.status(404).end();
  }
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
    
     const nftimages = nfts.map((data) =>
      data.get('image' )
      
    );
    const editionNum = nfts.map((data) =>
      data.get('edition' )
      
    );

  res.render('homepage', {nftimages, editionNum});
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

     var nftsRawData = await User.findAll({
              where: {
                    id: req.session.user_id,
                  },

              include: [{model: Nftitems}],
              

            }


    )
    var nftsData = nftsRawData[0].dataValues.nft_items.map(function(x) { return {name: x.name, image: x.image, edition: x.edition} }); 
            
    if (!nftsData) {
      res.status(404).json({ message: `No NFT found for ${nftsRawData[0].dataValues.email}` });
      return;
    }

    // res.status(200).json(nftsData);
    res.render('dashboard', { nftsData });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/nft', (req, res) => {

  res.render('nft');
});

module.exports = router;
