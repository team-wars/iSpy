const express = require('express');
const { newGame, populateBoard } = require('../controllers/gameController');
// const selectWords = require('../../utils/word-selection-algo');

const gameRouter = express.Router();

gameRouter.post('/start', newGame, populateBoard);

module.exports = gameRouter;
