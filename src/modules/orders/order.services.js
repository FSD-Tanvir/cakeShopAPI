const Order = require('./order.model');
const AppError = require('../../errors/AppError');
const { StatusCodes } = require('http-status-codes');

const createOrder = (payload) => Order.create(payload);

const userOrders = (userId) =>
  Order.find({ user: userId }).populate('items.cake').sort('-createdAt');

const adminListOrders = (query) => {
  const filter = {};
  if (query.status) filter.status = query.status;
  return Order.find(filter)
    .populate('user', 'name email')
    .populate('items.cake')
    .sort('-createdAt');
};

const updateStatus = async (id, status) => {
  const order = await Order.findById(id);
  if (!order) throw new AppError(StatusCodes.NOT_FOUND, 'Order not found');
  order.status = status;
  await order.save();
  return order;
};

const deleteOrder = async (id) => {
  const order = await Order.findByIdAndDelete(id);
  if (!order) throw new AppError(StatusCodes.NOT_FOUND, 'Order not found');
  return order;
};

module.exports = {
  createOrder,
  userOrders,
  adminListOrders,
  updateStatus,
  deleteOrder,
};
