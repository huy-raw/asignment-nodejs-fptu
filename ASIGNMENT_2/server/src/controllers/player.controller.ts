import { Request, Response } from 'express'
import * as PlayerService from 'services/player.service'
import { IPlayer } from '../models/player.model';

export const createPlayer = async (req: Request, res: Response): Promise<any> => {
    try {
        const payload: IPlayer = {
            name: req.body.name,
            club: req.body.club,
            position: req.body.position,
            nation: req.body.nation,
            image: req.body.image,
            goals: req.body.goals,
            isCaptain: req.body.isCaptain
        }
        console.log("controller===>", payload);
        return res.status(200).json(await PlayerService.create(payload))
    } catch (error) {
        console.log("controller===>", error);
    }
}

export const getAllPlayer = async (_req: Request, res: Response): Promise<any> => {
    try {
        const response = await PlayerService.findAll();

        if (!response) {
            return res.status(404).json("No content")
        }
        return res.status(200).json(response)
    } catch (error) {
        console.log(error);
    }
}

export const getPlayerById = async (req: Request, res: Response): Promise<any> => {
    try {
        const id: String = req.params['id'] as string
        const response = await PlayerService.findById(id);
        if (!response) {
            return res.status(404).json("Not found!")
        }
        return res.status(200).json(response)
    } catch (error) {
        console.log(error);
    }
}

export const deleteById = async (req: Request, res: Response): Promise<any> => {
    try {
        const id: String = req.params['id'] as string
        const response = await PlayerService.deleteById(id)
        return res.status(200).json(response)
    } catch (error) {
        console.log(error);
    }
}

export const updateById = async (req: Request, res: Response): Promise<any> => {
    try {
        const id: String = req.params['id'] as String
        const payload: IPlayer = {
            name: req.body.name,
            club: req.body.club,
            goals: req.body.goals,
            image: req.body.image,
            isCaptain: req.body.isCaptian,
            position: req.body.position,
            nation: req.body.nation
        }
        const response = await PlayerService.updateById(id, payload);
        if (!response) {
            return res.status(400).json("Bad request")
        }
        return res.status(200).json(response)
    } catch (error) {
        console.log(error);
    }
}

