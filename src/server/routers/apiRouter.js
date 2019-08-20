const express = require('express');
const sessionRouter = require('./sessionRouter');
const userRouter = require('./userRouter');

const apiRouter = express.Router();

apiRouter.use('/session', sessionRouter);
apiRouter.use('/user', userRouter);

module.exports = apiRouter;