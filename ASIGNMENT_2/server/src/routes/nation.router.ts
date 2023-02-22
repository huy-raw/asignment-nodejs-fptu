import express from 'express'
import bodyParser from 'body-parser'
import * as NationController from 'controllers/nation.controller'
import { authMiddleware } from '@/middlewares/authentication';

const nationRouter = express.Router();
nationRouter.use(bodyParser.json());

nationRouter
    .get('/', NationController.getAllNation)
    .post('/', authMiddleware, NationController.createNation)
    .get('/:id', NationController.getNationById)
    .delete('/:id', authMiddleware, NationController.deleteNationById)
    .patch('/:id', authMiddleware, NationController.updateNationById)
    .put('/:id', authMiddleware, NationController.updateNationById)

export default nationRouter

