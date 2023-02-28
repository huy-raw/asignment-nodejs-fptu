import express from 'express'
import bodyParser from 'body-parser'
import * as UserController from 'controllers/user.controller'
import { authMiddleware } from '@/middlewares/authentication';

const userRouter = express.Router();
userRouter.use(bodyParser.json());

userRouter
    .get('/', UserController.getAllUser)
    .get('/:id', UserController.getUserById)
    .delete('/:id', authMiddleware, UserController.deleteUser)
    .patch('/:id', UserController.updateById)
    .put('/:id', UserController.updateById)


export default userRouter