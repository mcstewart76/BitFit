const router = require('express').Router();
const { User } = require('../models');
const { NftAttributes } = require('../models');
const { Nftitems } = require('../models');

router.get('/0', async (req, res) => {
  res.redirect('/nft/1')
});

router.get('/:id', async (req, res) => {
    try {

      const nfts = await Nftitems.findByPk(req.params.id, {
        include: [
          {model: NftAttributes},
        ],
      });
  var nftData = nfts.dataValues;
      var nftAt = nftData.nftAttributes;
      var pants = nftAt[0].dataValues; 
      var hoodie = nftAt[1].dataValues;
      var shoes = nftAt[2].dataValues;
      res.render('nft', {nftData, nftAt, pants, hoodie, shoes })
      //res.status(200).json(NftData);
    }
     catch (err) {
      res.status(500).json(err);
    }
  });


  
module.exports = router;