const jwt = require("jsonwebtoken");


const auth = async (req, res, next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            //generate token
            token = req.headers.authorization.split(" ")

            //verify token
            jwt.verify(token, process.env.JWT_SECRET)
            next();
        } catch (err) {
            console.log(err);
            res.status(401);
            throw new Error("Not authorized"); 
        }
    }
    if (!token) {
        res.status(401);
        throw new Error("Not authorized, no token");
      }
};

module.exports = auth;
