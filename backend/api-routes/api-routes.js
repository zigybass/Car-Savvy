
module.exports = function(app) {
    app.get('/api/login', function (req, res) {
        res.json({
            message: "Backed in login"
        })
        console.log("Login hits backend")
    })
}