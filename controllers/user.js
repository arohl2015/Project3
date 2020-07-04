const User = require("../models/user");

module.exports = {
    create: function (req, res) {
        User.findOne({ username: req.body.username })
            .then((account) => {
                if (account) {
                    res.send('Username is taken');
                } else {
                    User.create(req.body)
                        .then(() => {
                            res.send('Account created');
                        }).catch((err) => {
                            console.log(err);
                        })
                }
            }).catch((err) => {
                console.log(err);
            })
    }
}