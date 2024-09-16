const express = require('express');
const router = express.Router();
const cors = require('cors');

const { createBlog } = require('../controllers/blogController');

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
);

router.post('/createblog', createBlog);

module.exports = router;  // Corrected from module.export to module.exports