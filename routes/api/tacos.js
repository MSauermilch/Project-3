const router = require('express').Router();
const tacosController = require('../../controllers/tacosController');

//matches with /api/tacos
router.route("/")
  .get(tacosController.findAll)
  .post(tacosController.create);

// matches with "/api/tacos/:id"
router
  .route("/:id")
  .get(tacosController.findById)
  .put(tacosController.update)
  .delete(tacosController.remove);

module.exports = router;