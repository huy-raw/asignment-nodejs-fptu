import express from "express";
import bodyParser from 'body-parser'
import playerController from "../controller/playerController.js";
import { PLAYER_ID_PATH, SFLASH_PATH } from "../common.js";
import { handleError } from "./handleError.js";

const playerRouter = express.Router();
playerRouter.use(bodyParser.json());

playerRouter
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get(SFLASH_PATH, handleError(playerController.getAllPlayer))
    .delete(PLAYER_ID_PATH, handleError(playerController.deletePlayer))
    .post(SFLASH_PATH, handleError(playerController.createPlayer))
    .put(PLAYER_ID_PATH, handleError(playerController.updatePlayerById))
    .get(PLAYER_ID_PATH, handleError(playerController.getPlayerById))

export default playerRouter;