const express = require('express');
const { create } = require('../controllers/sessionController');

const sessionRouter = express.Router();

sessionRouter.get('/create', create);
module.exports = sessionRouter;