import { handleErrorMessage } from '@/utils/error';
import { CreatePlayerRequest, QueryOption, UpdatePlayerRequest } from '@/utils/request';
import { Request, Response } from 'express'
import * as PlayerService from 'services/player.service'


export const createPlayer = async (req: Request, res: Response) => {
    try {
        const payload: CreatePlayerRequest = {
            name: req.body.name,
            club: req.body.club,
            position: req.body.position,
            nation: req.body.nation,
            image: req.body.image,
            goals: req.body.goals,
            isCaptain: req.body.isCaptain
        }
        console.log("controller===>", payload);
        const response = await PlayerService.create(payload)
        return res.status(200).json({
            data: response
        })
    } catch (error) {
        res.status(500).json(handleErrorMessage(error))
    }
}

// export const getAllPlayer = async (_req: Request, res: Response): Promise<any> => {
//     try {
//         const response = await PlayerService.findAll();

//         if (!response) {
//             return res.status(404).json("No content")
//         }
//         return res.status(200).json({
//             data: response
//         })
//     } catch (error) {
//         res.status(500).json(handleErrorMessage(error))
//     }
// }

export const getPlayerByOption = async (req: Request, res: Response): Promise<any> => {
    try {
        const queryOption: QueryOption = {
            page: req.query["page"] || 1 as any,
            limit: req.query["limit"] || 5 as any,
            skip: req.query["skip"] || 0 as any,
            sort: req.query["sort"] as any,
            filter: req.query["filter"] || null as any
        }
        const response = await PlayerService.findByOption(queryOption)
        return res.status(200).json({
            data: response
        })
    } catch (error) {
        res.status(500).json(handleErrorMessage(error))
    }
}

export const getPlayerById = async (req: Request, res: Response): Promise<any> => {
    try {
        const id: String = req.params['id'] as string
        const response = await PlayerService.findById(id);
        if (!response) {
            return res.status(404).json("Not found!")
        }
        return res.status(200).json({
            data: response
        })
    } catch (error) {
        res.status(500).json(handleErrorMessage(error))
    }
}

export const deleteById = async (req: Request, res: Response): Promise<any> => {
    try {
        const id: String = req.params['id'] as string
        const response = await PlayerService.deleteById(id)
        return res.status(200).json({
            data: response
        })
    } catch (error) {
        res.status(500).json(handleErrorMessage(error))
    }
}

export const updateById = async (req: Request, res: Response): Promise<any> => {
    try {
        const id: String = req.params['id'] as String
        const payload: UpdatePlayerRequest = {
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
        return res.status(200).json({
            data: response
        })
    } catch (error) {
        res.status(500).json(handleErrorMessage(error))
    }
}

