const express= require('express');
const router = express.Router();
const cors = require('cors');

const { CreateUser } = require('../controllers/userController')

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
);

//routes
router.post('/createuser', CreateUser)

module.exports = router