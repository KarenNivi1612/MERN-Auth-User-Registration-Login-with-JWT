const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    const token = req.header("Authorization");

    // Check if token is missing
    if (!token) {
        return res.status(401).json({ msg: "No token, authorization denied" });
    }

    try {
        // Extract token (remove "Bearer " prefix)
        const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: "Invalid Token" });
    }
};
