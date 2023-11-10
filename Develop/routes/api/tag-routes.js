const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
// find all tags
router.get('/', async (req, res) => {
  try {
    const allTags = await Tag.findAll({
      where: {
        id: req.params.id,
      },
      include: [
        Product,
        {
          model: Tag,
          through: ProductTag
        },
      ],
    });
    res.status(200).json(allTags);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find a single tag by its `id`
router.get('/:id', async (req, res) => {
  try{
    // be sure to include its associated Product data
    const singleTag = await Tag.findByOne({
      include: [
        Product,
        {
          model: Product,
          through: ProductTag
        },
      ],
    });
    if (!singleTag) {
      res.status(404).json({ message: 'No tag with that ID in our database, please try again.'})
    return;
  }
  res.status(200).json(singleTag)
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new tag
router.post('/', (req, res) => {
  Tag.create(req.body)
  .then((tag) => {
// if there's product tags, we need to create pairings to bulk create in the ProductTag model
if (req.body.productIds.length) {
  const productTagIdArr = req.body.tagIds.map((tag_id) => {
    return {
      product_id: product.id,
      tag_id,
    };
  });
  return ProductTag.bulkCreate(productTagIdArr);
}
// if no product tags, just respond
res.status(200).json(product);
  })
  .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

// delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const deleteTag = await Product.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!deleteTag) {
      res.status(404).json({ message: "No tag with this id in our database, try again with a new ID number. " })
      return;
    }
  
    res.status(200).json(deleteTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
