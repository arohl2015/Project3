const path = require("path");
const controllers = require("../controllers");
const passport = require("../passport");
const router = require("express").Router();

router.route("/")
  .get(storeController.findAll)
  .post(storeController.create);

router
  .route("/:type")
  .get(storeController.findById)
  .put(storeController.update)
  .delete(storeController.remove)

  router.route("/signup")
    .post(controllers.auth.create)

router.post("/home", passport.authenticate('local'),
    // { successRedirect: '/', failureRedirect: '/auth' }
    (req, res) => {
        console.log('logged in', req.user);
        console.log(req.user.username);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)

router.get('/find', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

module.exports = router;
