

module.exports = function(app) {

    // Needs authentication here
    app.post('/api/login', function (req, res) {
        res.json({
            message: "Logged in!"
        })
        console.log("Login hits backend with: " + req.body)
    })

    app.post("/api/users", (req, res) => {
        res.json({
            message: "New User created!"
        })
        console.log(JSON.stringify(req.body))
    })
}