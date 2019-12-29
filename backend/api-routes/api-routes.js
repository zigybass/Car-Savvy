const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = function(app) {

  // Needs authentication here, but logs user in
  app.post("/api/login", function(req, res) {
    console.log("Login attempt: " + JSON.stringify(req.body));
    const { username, password } = req.body;
    User.findOne({ username: username }, (err, res) => {
      if (err) {
        throw err;
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
  // Update: Use Result instead of res. Helps distinguish variables
  app.post("/api/users", (req, res) => {
   console.log("api users: " + JSON.stringify(req.body));
   User.create(req.body).then( result => {
       res.json(result)
   });
  });

  app.post("/api/createAccount", (req, res) => {
      console.log("api create account")
  })

  const createUser = user => {
      console.log("createUser function: " + JSON.stringify(user))
  };
};
