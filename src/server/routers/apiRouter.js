const express = require('express');
const sessionRouter = require('./routers/sessionRouter');
const userRouter = require('./routers/userRouter');

const apiRouter = express.Router();

apiRouter.use('/session', sessionRouter);
apiRouter.use('/user', userRouter);