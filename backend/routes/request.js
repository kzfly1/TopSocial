const express = require('express');
const{getRequest} = require('../controllers/requestController');
const requestRouter = express.Router();

requestRouter.get('/', getRequest);
module.exports = requestRouter;