const express = require('express');
const {getProfile} = require('../controllers/profileController');
const profileRouter = express.Router();

profileRouter.get('/', getProfile);
module.exports = profileRouter;