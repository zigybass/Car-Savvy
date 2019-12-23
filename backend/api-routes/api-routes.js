const User = require("../models/User");

module.exports = function(app) {

    // Needs authentication here
    app.post('/api/login', function (req, res) {
        res.json({
            message: "Logged in!"
        })
        console.log("Login hits backend with: " + req.body)
    })

    app.post("/api/users", (req, res) => {
        console.log("POST Route: " + JSON.stringify(req.body))
        User.create(req.body), (err, res) => {
            if (err) {
                console.log("POST User Err: " + err)
            }
        }
        res.json({
            message: "User created!"
        })
    })
}