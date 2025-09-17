const express = require('express');
const { create, myOrders, list, setStatus, remove } = require('./order.controller');
const authMiddleware = require('../../middlewares/authMiddleware');

const router = express.Router();

// user
router.post('/', authMiddleware('user', 'admin'), create);
router.get('/mine', authMiddleware('user', 'admin'), myOrders);

// admin
router.get('/', authMiddleware('admin'), list);
router.patch('/:id/status', authMiddleware('admin'), setStatus);
router.delete('/:id', authMiddleware('admin'), remove);

module.exports = router;
