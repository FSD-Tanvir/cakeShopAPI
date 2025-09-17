const catchAsync = require('../../helper/utils/catchAsync');
const sendResponse = require('../../helper/utils/sendResponse');
const { StatusCodes } = require('http-status-codes');
const svc = require('./customOrder.services');

const create = catchAsync(async (req, res) => {
  const payload = { ...req.body, user: req.user._id };
  const data = await svc.createCustomOrder(payload);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Custom order submitted',
    data,
  });
});

const mine = catchAsync(async (req, res) => {
  const data = await svc.listMyCustomOrders(req.user._id);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'My custom orders',
    data,
  });
});

// admin
const list = catchAsync(async (req, res) => {
  const data = await svc.adminListCustomOrders(req.query);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Custom orders',
    data,
  });
});

const update = catchAsync(async (req, res) => {
  const data = await svc.updateCustomOrder(req.params.id, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Custom order updated',
    data,
  });
});

const remove = catchAsync(async (req, res) => {
  const data = await svc.deleteCustomOrder(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Custom order deleted',
    data,
  });
});

module.exports = { create, mine, list, update, remove };
