const User = require("../models/User");

module.exports = function(app) {

    // Needs authentication here
    app.post('/api/login', function (req, res) {
        console.log("Login attempt: " + JSON.stringify(req.body))
        const { username, password } = req.body;
        User.findOne({ username: username }, (err, res) => {
            if (err) {
                console.log(err);
            };
        }).then( dbUser => {
            if ((!dbUser) || (dbUser.password !== password) ) {
                return res.status(401).json({
                    message: "Username or password is incorrect"
                })
            } else if (dbUser) {
                res.json(dbUser);
            }
        })
    });

    app.post("/api/users", (req, res) => {
        console.log("POST Route: " + JSON.stringify(req.body))
        const { username } = req.body;
        User.findOne({ username: username}, (err, res) => {
            if (err) {
                console.log(err)
            }
        }).then( dbUser => {
            if (dbUser) {
                return res.status(401).json({
                    message: "User already exists"
                })
            } else if (!dbUser) {

                // Hash password here?

                User.create(req.body), (err, res) => {
                    if (err) {
                        console.log("POST User Err: " + err)
                    } else {
                        res.json({
                            message: "user created"
                        })
                    }
                }
            }
        })
    })
};