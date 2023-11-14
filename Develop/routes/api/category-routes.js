const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// find all categories
router.get('/', async (req, res) => {
  try {
  const categories = await Category.findAll({
    // be sure to include its associated Products
    include: [
       Product
    ],
  });
  res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err)
    console.log(err);
  }
});

// find one category by its `id` value
router.get('/:id', async (req, res) => {
  try {
    // be sure to include its associated Products
    const singleCategory = await Category.findOne({
      where: {
        id: req.params.id,
      },
      // be sure to include its associated Products
      include: [
        Product
      ],
    });
    res.status(200).json(singleCategory);
  } catch (err) {
    res.status(500).json(err)
    console.log(err);
  }
});

// create a new category
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(200).json(err);
  }
});

// update a category by its `id` value
router.put('/:id', (req, res) => {
  Category.update(req.body, {
    // gives the category based on the request params
    where: {
      id: req.params.id,
    },
  })
    .then((updatedCategory) => {
      res.json(updatedCategory);
    })
    .catch((err) => res.json(err));
});

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const deleteCategory = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!deleteCategory) {
      res.status(404).json({ message: "No category with this id in our database, try again with a new ID number. "})
      return;
    }

    res.status(200).json(deleteCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
