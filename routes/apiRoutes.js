const express = require("express");
const db = require ("../models");
const controllers = require("../controllers");
const passport = require("../passport");
const router = express.Router();

router.route("/api/store")
  .get(controllers.store.findAll)
//   .post(controllers.store.create);

// router
//   .route("/:type")
//   .get(controllers.store.findById)
//   .put(controllers.store.update)
//   .delete(controllers.store.remove)


//authentication routes
router.post("/signup", function (req, res) {
    db.User.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
    console.log(err);
    } else if (user) {
    res.json({ msg: "Account already exists!" });
    } else {
        console.log(req.body);
        
    db.User.create(req.body).then(function () {
    res.redirect(307, "/login");
            });
          }
        });
      });
      
router.post("/login", passport.authenticate("local"), function (req, res) {
    console.log("login hit");
    res.json(req.user);
      });

module.exports = router;
