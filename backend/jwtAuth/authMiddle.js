// import jwt from "jsonwebtoken";

function authenticateToken(req, res, next) {
    const authorization = JSON.stringify(req.headers);
    console.log("line5 authmiddle: " + authorization);
    
    next();
}

module.exports = authenticateToken;