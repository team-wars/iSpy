const express = require('express');
const { create } = require('../controllers/sessionController');

const sessionRouter = express.Router();

// SHOULD THIS BE A POST REQ? WHEN DOES THE VERY FIRST PERSON ENTER THEIR NAME?
sessionRouter.get('/create', create);
module.exports = sessionRouter;
