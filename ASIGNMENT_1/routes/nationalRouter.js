import express from 'express'
import bodyParser from 'body-parser'
import nationalController from '../controller/nationalController.js';
import { NATIONAL_ID_PATH, SFLASH_PATH } from '../common.js';
import { handleError } from './handleError.js';

const nationalRouter = express.Router();
nationalRouter.use(bodyParser.json());


nationalRouter
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get(SFLASH_PATH, handleError(nationalController.getAllNational))
    .delete(NATIONAL_ID_PATH, handleError(nationalController.deleteNational))
    .get(NATIONAL_ID_PATH, handleError(nationalController.getNationalById))
    .put(NATIONAL_ID_PATH, handleError(nationalController.updateNationalById))
    .post(SFLASH_PATH, handleError(nationalController.createNational))

export default nationalRouter;
