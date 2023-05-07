const router = require('express').Router();
// const { json } = require('sequelize/types');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/',  (req, res) => {
  // find all categories
 Category.findAll({indlude:[Product]}).then(categories => res.json(categories)).catch(error => error.message);
  // console.log(data);
  // res.send(JSON.stringify(data));
  

  // be sure to include its associated Products
});

// router.get('/:id',  (req, res) => {
//   // find one category by its `id` value
//   Category.findOne({
//     where:{
//       id:req.params.id
//     },
//     include: [{model: "product"}]
//   }).then(category => res.json(category)).catch(error => error.message);

//   // be sure to include its associated Products
// });

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,
    },
    // include: [Product],
  })
    .then((category) => res.json(category))
    .catch((err) => res.status(400).json(err));
});


router.post('/', (req, res) => {
  // create a new category
 Category.create(req.body).then(category => res.status(200).json(category)).catch(error => res.status(500).json({error: error.message}));
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {where: {id:req.params.id}}).then(category => res.json(category)).catch(error => error.message);
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({where: {id:req.params.id}}).then(category => res.json(category)).catch(error => error.message);
});

module.exports = router;
