const jwt = require('jsonwebtoken');
const router = require('express').Router();


const user = {
    name: process.env.user_name,
    pwd: process.env.pwd
}

const token = jwt.sign(user, process.env.token_key);

router.get('/get', function(req,res) {
    res.send(token)
});

function verifyToken(req,res,next){
    let bearerHeader = req.headers['authorization'];
    let token;
    console.log(bearerHeader);
    req.authenticated = false
    if (bearerHeader) {
        let bearer = bearerHeader.split(' ');
        token = bearer[1];
        jwt.verify(token, process.env.token_key, function(err, decoded) {
            if (err) {
                req.authenticated = false;
                req.decoded = null;
            }
            else {
                req.authenticated = false;
                req.decoded = decoded;                
            }
            next();
        })
    }
}

module.exports = { router, verifyToken };

