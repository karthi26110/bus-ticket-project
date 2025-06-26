const express = require('express');
const { addRoute, updateRoute } = require('../controllers/routeController');
const { verifyToken } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', verifyToken, addRoute);
router.put('/:id', verifyToken, updateRoute);

module.exports = router;
