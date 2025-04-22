const jwt = require("jsonwebtoken");
const { User } = require("../models");
require('dotenv').config();

async function authentication(req, res, next) {
    try {
        const accessToken = req.headers.authorization?.split(' ')[1]; // Format: Bearer <token>
        console.log(accessToken);
        
        if (!accessToken) throw { name: 'Unauthorized' };

        
        const decoded = jwt.verify(accessToken, process.env.JWT_SECRET); // Ganti dengan secret di .env
        
       
        const user = await User.findOne({
            where: {
                email: decoded.email
            }
        });

        
        if (!user) throw { name: 'Unauthorized' };

        
        req.user = user; // Di sini kita masukkan seluruh data user, termasuk role

        next();

    } catch (error) {
        res.status(401).json({ message: 'Invalid or missing token' });
    }
}

module.exports = { authentication };
