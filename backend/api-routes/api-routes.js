const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = function(app) {

  // Needs authentication here, but logs user in
  app.post("/api/login", function(req, res) {
    console.log("Login attempt: " + JSON.stringify(req.body));
    const { username, password } = req.body;
    User.findOne({ username: username }, (err, res) => {
      if (err) {
        console.log(err);
      }
    }).then(dbUser => {
      if (!dbUser || dbUser.password !== password) {
        return res.status(401).json({
          message: "Username or password is incorrect"
        });
      } else if (dbUser) {
        res.json(dbUser);
      }
    });
  });

  // Checks for used username, then creates user in DB if no username exists.
  app.post("/api/users", (req, res) => {
    console.log("CreateAcc Attempt: " + JSON.stringify(req.body));
    const { username } = req.body;
    User.findOne({ username: username }, (err, res) => {
      if (err) {
        throw err;
      }; 
    }).then( dbUser => {
        res.json(dbUser);
        createUser(req.body)
    });
  });

  app.post("/api/createAccount", (req, res) => {
      console.log("create Account: " + req.body);
      res.json({
          message: "hits backend"
      });
      User.create(req.body).then(res => {
          console.log(res);
      })
  })

  const createUser = user => {
      console.log("createUser function: " + user)
  }
};
