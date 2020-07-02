const router = require("express").Router();
const storeController = require("../../controllers/storeController");

// Matches with "/api/books"
router.route("/")
  .get(storeController.findAll)
  .post(storeController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(storeController.findById)
  .put(storeController.update)
  

module.exports = router;
