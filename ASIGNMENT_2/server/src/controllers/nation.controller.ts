import { INation } from "@/models/nation.model";
import { Request, Response } from "express";
import * as NationService from 'services/nation.service'


export const getAllNation = async (_req: Request, res: Response): Promise<any> => {
    const response = await NationService.findAll()
    return res.status(200).json(response)
}

export const createNation = async (req: Request, res: Response): Promise<any> => {
    const payload: INation = {
        name: req.body.name,
        description: req.body.description
    }
    return res.status(200).json(await NationService.create(payload))
}

export const getNationById = async (req: Request, res: Response): Promise<any> => {
    const id: any = req.params["id"]
    const response = await NationService.findById(id)
    return res.status(200).json(response);
}

export const deleteNationById = async (req: Request, res: Response): Promise<any> => {
    const id: any = req.params["id"]
    return res.status(200).json(await NationService.deleteById(id));
}

export const updateNationById = async (req: Request, res: Response): Promise<any> => {
    const payload: INation = {
        name: req.body.name,
        description: req.body.description
    }
    const id: any = req.params["id"]
    return res.status(200).json(await NationService.updateById(id, payload))
}