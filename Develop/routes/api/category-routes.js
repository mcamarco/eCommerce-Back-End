const router = require("express").Router();
const { Category, Product } = require("../../models");


// Find all categories
router.get("/", (req, res) => {
    Category.findAll({
    include: [Product], 
  })
    .then((categories) => {
      res.json(categories); 
    })
    .catch((err) => {
      res.status(500).json(err); 
    });
});

router.get("/:id", (req, res) => {
  // Find one category by its `id` value
  Category.findByPk(req.params.id, {
    include: [Product], // Include associated Products
  })
    .then((category) => {
      if (!category) {
        res.status(404).json({ message: "No category found with this id" }); // Send a 404 response if category is not found
        return;
      }
      res.json(category); // Send the category as a JSON response
    })
    .catch((err) => {
      res.status(500).json(err); // Send an error response if there is an error
    });
});

router.post("/", (req, res) => {
  // Create a new category
  Category.create(req.body)
    .then((category) => {
      res.json(category); // Send the newly created category as a JSON response
    })
    .catch((err) => {
      res.status(500).json(err); // Send an error response if there is an error
    });
});

router.put("/:id", (req, res) => {
  Category.update(req.body, { where: { id: req.params.id } })
    .then((category) => {
      res.json(category);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Category.destroy({ where: { id: req.params.id } })
    .then((category) => {
      res.json(category);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
