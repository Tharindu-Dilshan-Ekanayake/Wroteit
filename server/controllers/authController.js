const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { comparePassword } = require('../helpers/auth');

//login End Point
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        //check user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({
                error: 'no user found'
            });
        }

        //compare password
        const match = await comparePassword(password, user.password);
        if (match) {
            //return res.json('passwordmatch');
            jwt.sign({ id: user._id }, process.env.REACT_APP_JWT_SECRET, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json(user);
            });
        } else {
            return res.json({ error: 'Incorrect password' });
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Server Error' });
    }
};

const getprofile = (req, res) => {
    const { token } = req.cookies;

    if (token) {
        jwt.verify(token, process.env.REACT_APP_JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ error: 'Invalid or expired token' });
            }

            // Find user by decoded id
            User.findById(decoded.id)
                .then(user => {
                    if (!user) {
                        return res.status(404).json({ error: 'User not found' });
                    }

                    // Return user profile (add more fields if needed)
                    const userProfile = {
                        _id: user._id,
                        email: user.email,
                        fname: user.fname
                    };
                    res.json(userProfile);
                })
                .catch(error => {
                    console.error('Error finding user:', error);
                    res.status(500).json({ error: 'Server error' });
                });
        });
    } else {
        res.status(401).json({ error: 'No token provided' });
    }
};

//logout
const logoutUser = (req, res) =>{
    res.clearCookie('token');
    res.status(200).json({ message: 'Logout successful' });
}


module.exports = {
    loginUser,
    getprofile,
    logoutUser
};
