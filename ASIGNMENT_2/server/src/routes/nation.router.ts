import express from 'express'
import bodyParser from 'body-parser'
import * as NationController from 'controllers/nation.controller'

const nationRouter = express.Router();
nationRouter.use(bodyParser.json());

nationRouter
    .get('/', NationController.getAllNation)
    .post('/', NationController.createNation)
    .get('/:id', NationController.getNationById)
    .delete('/:id', NationController.deleteNationById)
    .patch('/:id', NationController.updateNationById)
    .put('/:id', NationController.updateNationById)

export default nationRouter

