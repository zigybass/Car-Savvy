module.exports = function(app) {
    app.post("/user/login", (req, res) => {
        console.log("Login hits the backend")
    })
}