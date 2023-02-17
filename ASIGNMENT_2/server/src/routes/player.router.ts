import express from 'express'
import bodyParser from 'body-parser'
import * as PlayerController from 'controllers/player.controller'

const playerRouter = express.Router()
playerRouter.use(bodyParser.json())

playerRouter
    .post('/', PlayerController.createPlayer)
    .get('/', PlayerController.getAllPlayer)    
    .get('/:id', PlayerController.getPlayerById)
    .patch('/:id', PlayerController.updateById)
    .delete('/:id', PlayerController.deleteById)
    .put('/:id', PlayerController.updateById)

export default playerRouter