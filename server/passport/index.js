const passport = require("passport");
const LocalStrategy = require("./localStrategy");
const User = require("");

passport.serializeUser((user, done) => {
    console.log("serialize ... caled");    
    console.log(user);
    console.log("==========");
    done(null, {_id: user._id});
});

passport.deserializeUser((id, done) =>{
    console.log("DEserialize ... called");
    User.findOne(
        {_id: id},
        "",
        (err, user) => {
            console.log("======DESERIALIZE USER CALLED======");
            console.log(user);
            console.log("===========");
            done(null, user);            
        }
    );    
});

passport.use(LocalStrategy);

module.exports = passport;