const jwt = require('jsonwebtoken');
const SECRET_KEY = "your_secret_key";
// Middleware function to authenticate JWT token
module.exports =  authenticateToken = (req, res, next) => {
    // Extract token from authorization header
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    // If no token provided, return 401 Unauthorized
    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        // If token is invalid, return 403 Forbidden
        if (err) {
            return res.status(403).json({ message: "Invalid token." });
        }
        // If token is valid, set decoded user data to req.user and proceed to next middleware
        req.user = decoded;
        next();
    });
};
