const jwt = require('jsonwebtoken');
const SECRET_KEY = "your_secret_key";
<<<<<<< Updated upstream
// Middleware function to authenticate JWT token
module.exports =  authenticateToken = (req, res, next) => {
    // Extract token from authorization header
=======
// Export the middleware function authenticateToken for JWT token validation
module.exports =  authenticateToken = (req, res, next) => {
    // Get the Authorization header from the request
>>>>>>> Stashed changes
    const authHeader = req.headers['authorization'];
    // Extract the JWT token from the Authorization header
    const token = authHeader && authHeader.split(' ')[1];
<<<<<<< Updated upstream
    // If no token provided, return 401 Unauthorized
=======
    // If no token is provided, return a 401 error
>>>>>>> Stashed changes
    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }
    // Verify the validity of the JWT token
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
<<<<<<< Updated upstream
        // If token is invalid, return 403 Forbidden
        if (err) {
            return res.status(403).json({ message: "Invalid token." });
        }
        // If token is valid, set decoded user data to req.user and proceed to next middleware
=======
        // If verification fails, return a 403 error
        if (err) {
            return res.status(403).json({ message: "Invalid token." });
        }
        // Attach the decoded user information to the request object
>>>>>>> Stashed changes
        req.user = decoded;
        // Call the next middleware
        next();
    });
};
