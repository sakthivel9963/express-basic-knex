const router = require('express').Router();

const ExampleController = require('./example.contoller');

router.get('/', ExampleController.get);

module.exports = router;
