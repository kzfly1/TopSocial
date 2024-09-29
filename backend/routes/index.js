const express = require('express');
const highlineRouter = require('./highline');
const messageRouter = require('./message');
const profileRouter = require('./profile');
const requestRouter = require('./request');
const cardsRouter = require('./cards');
//create router
const router = express.Router();
router.use('/highline', highlineRouter);
router.use('/message', messageRouter);
router.use('/profile', profileRouter);
router.use('/request', requestRouter);
router.use('/cards', cardsRouter);
module.exports = router;