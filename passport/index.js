const passport = require("passport");
const LocalStrategy = require("./localStrategy");
const db = require("../models");

// called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((user, done) => {
	console.log("*** serializeUser called, user: ")
	console.log(user)
	console.log("---------")
	done(null, user);
})

// user object attaches to the request as req.user
passport.deserializeUser((id, done) => {
    db.User.findOne ({
        _id: id
    }, '-password -salt', function(err, user) {
        done(err, user);
    })
    console.log("*** DeserializeUser called");
    console.log("*** Deserialize user, user:");
    console.log(user);
    console.log("--------------");
    done(null, user);
  });

//  Use Strategies 
passport.use(LocalStrategy);

module.exports = passport;