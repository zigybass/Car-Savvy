const User = require("../models/User");
const jwt = require("jsonwebtoken");
const authMiddle = require("../jwtAuth/authMiddle");

module.exports = function(app) {

  app.post("/api/login", function(req, res) {
    console.log("Login attempt: " + JSON.stringify(req.body));
    const { username, password } = req.body;
    User.findOne({ username: username }, (err, res) => {
      if (err) {
        throw err;
      };
    }).then(dbUser => {
      const verify = dbUser.comparePasswords(password);
      if (!dbUser || !verify) {
        return res.sendStatus(401).json({
          message: "Username or password is incorrect"
        });
      } else if (dbUser && verify) {
        const user = { 
          user: dbUser.username,
          name: dbUser.firstName
        }
        const accessToken = jwt.sign(
          user, 
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: 1200 }
          );
        res.json({ 
          accessToken: accessToken,
          name: dbUser.firstName,
          id: dbUser._id
         });
      }
    }).catch( err => {
      res.sendStatus(401)
    })
  });

  // Checks for used username, then creates user in DB if no username exists.
  // Update: Use Result instead of res. Helps distinguish variables
  app.post("/api/users", (req, res) => {
    console.log("api users: " + JSON.stringify(req.body));
    const { username } = req.body;
        User.findOne({ username: username })
      .then(result => {
        if (result) {
          res.json({
            message: "user exists"
          });
          console.log("line 33: username exists");
        } else if (!result) {
          console.log("line 37: " + JSON.stringify(req.body))
          User.create(req.body).then(dbUser => {
            const user = { 
              user: dbUser.username,
              name: dbUser.firstName
            }
            const accessToken = jwt.sign(
              user, 
              process.env.ACCESS_TOKEN_SECRET,
              { expiresIn: 1200 }
              );
            res.json({ 
              accessToken: accessToken,
              name: dbUser.firstName,
              id: dbUser._id
             });
          });
          console.log("line 39");
        } else {
          res.status(401);
          console.log("line 41");
        }
      })
      .catch(err => {
        console.log(err);
      });
  });

  app.get("/api/verify", authMiddle, (req, res) => {
    res.json(req.user);
  })
};