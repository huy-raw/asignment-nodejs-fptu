import express from 'express'
import bodyParser from 'body-parser'
import * as UserController from 'controllers/user.controller'

const userRouter = express.Router();
userRouter.use(bodyParser.json());

userRouter
    .post('/login', UserController.login)
    .post('/register', UserController.register)
    .get('/', UserController.getAllUser)

export default userRouter