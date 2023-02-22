import express from 'express'
import bodyParser from 'body-parser'
import * as PlayerController from 'controllers/player.controller'
import { authMiddleware } from '@/middlewares/authentication'

const playerRouter = express.Router()
playerRouter.use(bodyParser.json())

playerRouter
    .post('/', authMiddleware, PlayerController.createPlayer)
    .get('/', PlayerController.getAllPlayer)
    .get('/:id', PlayerController.getPlayerById)
    .patch('/:id', authMiddleware, PlayerController.updateById)
    .delete('/:id', authMiddleware, PlayerController.deleteById)
    .put('/:id', authMiddleware, PlayerController.updateById)

export default playerRouter