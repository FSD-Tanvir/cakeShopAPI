const CustomOrder = require('./customOrder.model');
const AppError = require('../../errors/AppError');
const { StatusCodes } = require('http-status-codes');

const createCustomOrder = (payload) => CustomOrder.create(payload);

const listMyCustomOrders = (userId) =>
  CustomOrder.find({ user: userId }).sort('-createdAt');

const adminListCustomOrders = (query) => {
  const filter = {};
  if (query.status) filter.status = query.status;
  return CustomOrder.find(filter).populate('user', 'name email').sort('-createdAt');
};

const updateCustomOrder = async (id, payload) => {
  const doc = await CustomOrder.findByIdAndUpdate(id, payload, { new: true });
  if (!doc) throw new AppError(StatusCodes.NOT_FOUND, 'Custom order not found');
  return doc;
};

const deleteCustomOrder = async (id) => {
  const doc = await CustomOrder.findByIdAndDelete(id);
  if (!doc) throw new AppError(StatusCodes.NOT_FOUND, 'Custom order not found');
  return doc;
};

module.exports = {
  createCustomOrder,
  listMyCustomOrders,
  adminListCustomOrders,
  updateCustomOrder,
  deleteCustomOrder,
};
