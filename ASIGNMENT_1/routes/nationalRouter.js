import express from 'express'
import bodyParser from 'body-parser'
import nationalController from '../controller/nationalController.js';

const nationalRouter = express.Router();
nationalRouter.use(bodyParser.json());

const NATIONAL_ID_PATH = '/:nationalId'


nationalRouter
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get('/', nationalController.getAllNational)
    .delete(NATIONAL_ID_PATH, nationalController.deleteNational)
    .get(NATIONAL_ID_PATH, nationalController.getNationalById)
    .put(NATIONAL_ID_PATH, nationalController.updateNationalById)
    .post('/', nationalController.createNational)

export default nationalRouter;
