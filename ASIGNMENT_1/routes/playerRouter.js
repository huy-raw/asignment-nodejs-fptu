import express from "express";
import bodyParser from 'body-parser'
import playerController from "../controller/playerController.js";

const playerRouter = express.Router();
playerRouter.use(bodyParser.json());

playerRouter
    .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
    })
    .get('/', playerController.getAllPlayer)


export default playerRouter;