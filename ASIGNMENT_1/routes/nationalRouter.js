import express from 'express'
import bodyParser from 'body-parser'
import nationalController from '../controller/nationalController.js';
import { NATIONAL_ID_PATH, SFLASH_PATH } from '../common.js';

const nationalRouter = express.Router();
nationalRouter.use(bodyParser.json());


nationalRouter
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get(SFLASH_PATH, nationalController.getAllNational)
    .delete(NATIONAL_ID_PATH, nationalController.deleteNational)
    .get(NATIONAL_ID_PATH, nationalController.getNationalById)
    .put(NATIONAL_ID_PATH, nationalController.updateNationalById)
    .post(SFLASH_PATH, nationalController.createNational)

export default nationalRouter;
