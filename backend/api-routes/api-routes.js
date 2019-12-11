
module.exports = function(app) {
    app.post('/api/login', function (req, res) {
        res.json({
            message: "Backend hit"
        })
        console.log("Login hits backend with: " + req.body.username)
    })
}