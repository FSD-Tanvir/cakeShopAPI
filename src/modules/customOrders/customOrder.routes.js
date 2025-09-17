const express = require('express');
const { create, mine, list, update, remove } = require('./customOrder.controller');
const authMiddleware = require('../../middlewares/authMiddleware');

const router = express.Router();

// user
router.post('/', authMiddleware('user', 'admin'), create);
router.get('/mine', authMiddleware('user', 'admin'), mine);

// admin
router.get('/', authMiddleware('admin'), list);
router.patch('/:id', authMiddleware('admin'), update);
router.delete('/:id', authMiddleware('admin'), remove);

module.exports = router;
