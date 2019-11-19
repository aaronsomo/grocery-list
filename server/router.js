const router = require('express').Router();
const controllers = require('./controllers.js');

router
  .route('/grocerylist')
  .get(controllers.getAll)
  .post(controllers.postOne)

router
  .route('/grocerylist/:id')
  .delete(controllers.deleteOne)

module.exports = router;