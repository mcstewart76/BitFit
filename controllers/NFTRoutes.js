const router = require('express').Router();
const { User } = require('../models');
const { NftAttributes } = require('../models');
const { Nftitems } = require('../models');

router.get('/:id', async (req, res) => {
    try {

      const nfts = await Nftitems.findByPk(req.params.id, {
        
      });
  const nftData = nfts.dataValues;
      
      res.render('nft', {nftData})
      //res.status(200).json(NftData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


  
module.exports = router;