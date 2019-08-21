const express = require('express');
const sessionRouter = require('./sessionRouter');
const userRouter = require('./userRouter');
const gameRouter = require('./gameRouter');

const apiRouter = express.Router();

apiRouter.use('/session', sessionRouter);
apiRouter.use('/user', userRouter);
apiRouter.use('/game', gameRouter);

module.exports = apiRouter;