const express = require('express');
const {getMessage} = require('../controllers/messageController')
const messageRouter = express.Router();

messageRouter.get('/', getMessage);
module.exports = messageRouter;