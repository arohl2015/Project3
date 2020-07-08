const db = require("../models")
const LocalStrategy = require("passport-local").Strategy;

const strategy = new LocalStrategy(
	{
		usernameField: "username" // not necessary, DEFAULT
	},
	function(username, password, done) {
        console.log(username);
        console.log(password);
		db.User.findOne({ username: username }, (err, user) => {
			if (err) {
				return done(err)
			}
			if (!user) {
				return done(null, false, { message: "Incorrect username" })
			}
			if (!user.checkPassword(password)) {
				return done(null, false, { message: "Incorrect password" })
			}
			return done(null, User)
		})
	}
)

module.exports = strategy