const router = require('express').Router();
const { User } = require('../../models');
const { NftAttributes } = require('../../models');
const { Nftitems } = require('../../models');


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


  router.get('/', async (req, res) => {
    try {
      const NftData = await Nftitems.findAll({
        
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

  router.get('/query', async (req, res) => {
    try {

       const trait_type = req.query.trait;
       const value = req.query.value; 
      const NftData = await Nftitems.findAll({
        where: {
            trait: trait_type,
            value: value
          },
        include: [{ model: NftAttributes}]
      });
  
      if (!NftData) {
        res.status(404).json({ message: 'No results found for this query!' });
        return;
      }
  
      res.status(200).json(NftData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


  router.post('/:id', async (req, res) => {
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


module.exports = router;
