const express = require('express');
const router = express.Router();
const cors = require('cors');
const { loginUser, getprofile, logoutUser} = require('../controllers/authController');


router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
);
//router
router.post('/loginuser', loginUser);
router.get('/profile', getprofile);
router.post('/logout',logoutUser);


module.exports = router