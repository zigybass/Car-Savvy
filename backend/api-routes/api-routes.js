
module.exports = function(app) {
    app.post('/api/login', function (req, res) {
        res.json({
            message: "Backend hit"
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