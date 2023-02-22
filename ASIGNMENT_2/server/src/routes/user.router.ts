import express from 'express'
import bodyParser from 'body-parser'
import * as UserController from 'controllers/user.controller'

const userRouter = express.Router();
userRouter.use(bodyParser.json());

userRouter
    .get('/', UserController.getAllUser)


export default userRouter