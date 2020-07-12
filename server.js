const express = require("express");
const path = require ("path");
const passport = require("passport");
const session = require("express-session");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/apiRoutes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//setting up key for passport auth
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Define API routes here
app.use(apiRoutes);

// If no API routes are hit, send the React app
//had to comment this back in to deploy to heroku successfully
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hobbies", {
  useNewUrlParser: true,
  //the below is used to resolve deprecation issues
  useUnifiedTopology: true,
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT: ${PORT}!`);
});