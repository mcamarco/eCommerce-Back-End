const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
    Tag.findAll({
    include: [{model:Tag, through: ProductTag}], 
  })
    .then((Tag) => {
      res.json(Tag); 
    })
    .catch((err) => {
      res.status(500).json(err); 
    });
});

// TODO: FIX THESE TO MATCH CATEGORY - REPLACE CATEGORY WITH TAG
router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
