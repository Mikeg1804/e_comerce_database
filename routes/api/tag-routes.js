const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({include: Product}).then(tags => res.json(tags)).catch(error => error.message);
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    where:{
      id: req.params.id,
    }
  }, {include: Product}).then(tags => res.json(tags)).catch(error => error.message).catch(error => error.message);
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body).then(tags => res.json(tags)).catch(error => res.status(500).json({message: error.message}));
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {where:{id: req.params.id}}).then(tags => res.json(tags)).catch(error => error.message);
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({where:{is: req.params.id}}).then(tags => res.json(tags)).catch(error => error.message);
});

module.exports = router;
