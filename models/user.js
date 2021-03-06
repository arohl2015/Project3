const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//bcrypt hashes our passwords
const bcrypt = require("bcryptjs");
mongoose.promise = Promise

const UserSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
});

// Define schema methods
UserSchema.methods = {
	checkPassword: function (inputPassword) {
		console.log("password", inputPassword);
		console.log("password", this.password);
		console.log(this);
		
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: (plainTextPassword) => {
		return bcrypt.hashSync(plainTextPassword, 15)
	}
}

// Define hooks for pre-saving
UserSchema.pre("save", function (next) {
	if (!this.password) {
		console.log("models/user.js =======NO PASSWORD PROVIDED=======")
		next()
	} else {
		console.log("models/user.js hashPassword in pre save");
		
		this.password = this.hashPassword(this.password)
		next()
	}
})

const User = mongoose.model("User", UserSchema);
module.exports = User;