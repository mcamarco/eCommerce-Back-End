const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // Find all categories
  Category.findAll({
    include: [Product], // Include associated Products
  })
    .then((categories) => {
      res.json(categories); // Send the categories as a JSON response
    })
    .catch((err) => {
      res.status(500).json(err); // Send an error response if there is an error
    });
});

router.get('/:id', (req, res) => {
  // Find one category by its `id` value
  Category.findByPk(req.params.id, {
    include: [Product], // Include associated Products
  })
    .then((category) => {
      if (!category) {
        res.status(404).json({ message: 'No category found with this id' }); // Send a 404 response if category is not found
        return;
      }
      res.json(category); // Send the category as a JSON response
    })
    .catch((err) => {
      res.status(500).json(err); // Send an error response if there is an error
    });
});

router.post('/', (req, res) => {
  // Create a new category
  Category.create(req.body)
    .then((category) => {
      res.json(category); // Send the newly created category as a JSON response
    })
    .catch((err) => {
      res.status(500).json(err); // Send an error response if there is an error
    });
});

router.put('/:id', (req, res) => {
  //TODO  update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // TODO delete a category by its `id` value
});

module.exports = router;
