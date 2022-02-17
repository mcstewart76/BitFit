const router = require('express').Router();
const { User } = require('../models');
const { NftAttributes } = require('../models');
const { Nftitems } = require('../models');

router.get('/:id', async (req, res) => {
    try {

        
      const NftData = await Nftitems.findByPk(req.params.id, {
        
        include: [{ model: NftAttributes}]
      });
  
      if (!NftData) {
        res.status(404).json({ message: 'No NFT found with this id!' });
        return;
      }
  
      res.status(200).json(NftData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
