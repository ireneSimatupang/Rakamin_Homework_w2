function authorization(req, res, next) {
    
    console.log('User from JWT:', req.user);
    
    
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Access forbidden: admin only' });
    }
    
    
    next();
}

module.exports = { authorization };
