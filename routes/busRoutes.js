const express = require('express');
const { addBus, updateBus } = require('../controllers/busController');
const { verifyToken } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', verifyToken, addBus);
router.put('/:id', verifyToken, updateBus);

module.exports = router;
