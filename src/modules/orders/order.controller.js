const catchAsync = require('../../helper/utils/catchAsync');
const sendResponse = require('../../helper/utils/sendResponse');
const { StatusCodes } = require('http-status-codes');
const svc = require('./order.services');

// user: place
const create = catchAsync(async (req, res) => {
  const payload = { ...req.body, user: req.user._id };
  const data = await svc.createOrder(payload);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Order placed',
    data,
  });
});

// user: my orders
const myOrders = catchAsync(async (req, res) => {
  const data = await svc.userOrders(req.user._id);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'My orders',
    data,
  });
});

// admin: list
const list = catchAsync(async (req, res) => {
  const data = await svc.adminListOrders(req.query);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Orders',
    data,
  });
});

// admin: update status
const setStatus = catchAsync(async (req, res) => {
  const data = await svc.updateStatus(req.params.id, req.body.status);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Order status updated',
    data,
  });
});

// admin: delete
const remove = catchAsync(async (req, res) => {
  const data = await svc.deleteOrder(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Order deleted',
    data,
  });
});

module.exports = { create, myOrders, list, setStatus, remove };
