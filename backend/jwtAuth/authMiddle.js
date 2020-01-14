const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
    
    // Pulls token out of header
    const {authorization} = req.headers;
    const token = authorization && authorization.split(' ')[1];

    console.log(req.headers);
    console.log("Middle Token: " + token);

    if (token === null) return res.sendStatus(401);

    // Verifies token we just acquired
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user
    });

    next();
};

module.exports = authenticateToken;