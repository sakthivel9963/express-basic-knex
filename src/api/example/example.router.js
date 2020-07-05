const router = require('express').Router();

const ExampleController = require('./example.contoller');

// insert and select all record
router.route('/').get(ExampleController.get).post(ExampleController.save);

// get count
router.get('/count', ExampleController.count);

// update, delete and get particular record
router
  .route('/:id')
  .get(ExampleController.findOne)
  .put(ExampleController.update)
  .delete(ExampleController.delete);

module.exports = router;
