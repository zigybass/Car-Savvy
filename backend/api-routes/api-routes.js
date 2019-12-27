const User = require("../models/User");
const bcrypt = require("bcrypt");

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
                throw err;
                console.log("Error: " + err)
            } else {
                console.log("Post route response ELSE statement: " + res);
                if (res) {
                    return res.status(401);
                } else if (!res) {
                    return User.create(req.body).then( () => {
                        console.log("user created")
                    } );
                }
            } 
            // else if (!res.data) {
            //     console.log("res.data is falsey")
            //     createUser(req.body);
            // }
        });
    })
};