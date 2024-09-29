const express = require('express');
const {getHighline} = require('../controllers/highlineController');
const highlineRouter = express.Router();

highlineRouter.get('/', getHighline);
module.exports = highlineRouter;