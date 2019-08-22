const express = require('express');
const { create, getData } = require('../controllers/sessionController');

const sessionRouter = express.Router();

// SHOULD THIS BE A POST REQ? WHEN DOES THE VERY FIRST PERSON ENTER THEIR NAME?
sessionRouter.post('/create', create);
sessionRouter.get('/update-stores', getData);
module.exports = sessionRouter;
