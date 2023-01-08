import express from "express";
import bodyParser from 'body-parser'
import playerController from "../controller/playerController.js";
import { PLAYER_ID_PATH, SFLASH_PATH } from "../common.js";

const playerRouter = express.Router();
playerRouter.use(bodyParser.json());

playerRouter
    .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
    })
    .get(SFLASH_PATH, playerController.getAllPlayer)
    .delete(PLAYER_ID_PATH, playerController.deletePlayer)
    .post(SFLASH_PATH, playerController.createPlayer)
    .put(PLAYER_ID_PATH, playerController.updatePlayerById)
    .get(PLAYER_ID_PATH, playerController.getPlayerById)


export default playerRouter;