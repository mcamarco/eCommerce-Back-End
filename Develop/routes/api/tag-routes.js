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


router.get('/:id', (req, res) => {
  // Find one Tag by its `id` value
  Tag.findByPk(req.params.id, {
    include: [Product], // Include associated Products
  })
    .then((Tag) => {
      if (!Tag) {
        res.status(404).json({ message: "No Tag found with this id" }); // Send a 404 response if Tag is not found
        return;
      }
      res.json(Tag); // Send the Tag as a JSON response
    })
    .catch((err) => {
      res.status(500).json(err); // Send an error response if there is an error
    });
});

router.post('/', (req, res) => {
  // Create a new Tag
  Tag.create(req.body)
    .then((Tag) => {
      res.json(Tag);
    })
    .catch((err) => {
      res.status(500).json(err); 
    });
});

router.put("/:id", (req, res) => {
  Tag.update(req.body, { where: { id: req.params.id } })
    .then((Tag) => {
      res.json(Tag);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Tag.destroy({ where: { id: req.params.id } })
    .then((Tag) => {
      res.json(Tag);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;