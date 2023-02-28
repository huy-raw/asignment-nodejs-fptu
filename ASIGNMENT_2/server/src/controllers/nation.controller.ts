import { handleErrorMessage } from "@/utils/error";
import { Request, Response } from "express";
import { isNil } from "lodash";
import * as NationService from 'services/nation.service'
import { CreateNationRequest, UpdateNationRequest, QueryOption } from '../utils/request';


export const getNationByOption = async (req: Request, res: Response): Promise<any> => {
    try {
        const queryOption: QueryOption = {
            page: req.query["page"] || 1 as any,
            limit: req.query["limit"] || 5 as any,
            skip: req.query["skip"] || 0 as any,
            sort: req.query["sort"] || [],
            filter: req.query["filter"] || {}
        }
        const response = await NationService.findByOption(queryOption)
        return res.status(200).json({
            data: response
        })
    } catch (error) {
        res.status(404).json(handleErrorMessage(error))
    }
}
export const getAllNation = async (req: Request, res: Response): Promise<any> => {
    try {
        const response = await NationService.findAll();

        if (!response) {
            return res.status(404).json("No content")
        }
        return res.status(200).json({
            data: response
        })
    } catch (error) {
        res.status(404).json(handleErrorMessage(error))
    }
}

export const createNation = async (req: Request, res: Response): Promise<any> => {
    try {
        const payload: CreateNationRequest = {
            name: req.body.name,
            description: req.body.description,
            image: req.body.image
        }

        const checkExistNation = await NationService.findByName(payload.name);
        if (!isNil(checkExistNation)) {
            return res.status(404).json(`Nation ${payload.name} existed`)
        }

        const response = await NationService.create(payload)
        return res.status(200).json({
            data: response
        })
    } catch (error) {
        res.status(404).json(handleErrorMessage(error))
    }
}

export const getNationById = async (req: Request, res: Response): Promise<any> => {
    try {
        const id: any = req.params["id"]
        if (isNil(id)) {
            return res.status(404).json("Is empty id")
        }
        const response = await NationService.findById(id)
        return res.status(200).json({
            data: response
        });
    } catch (error) {
        res.status(404).json(handleErrorMessage(error))
    }
}

export const deleteNationById = async (req: Request, res: Response): Promise<any> => {
    try {
        const id: any = req.params["id"]
        const response = await NationService.deleteById(id)
        return res.status(200).json({
            data: response
        });
    } catch (error) {
        res.status(404).json(handleErrorMessage(error))
    }
}

export const updateNationById = async (req: Request, res: Response): Promise<any> => {
    try {
        const payload: UpdateNationRequest = {
            name: req.body?.name,
            description: req.body?.description,
            image: req.body?.image
        }
        const id: any = req.params["id"]
        const response = await NationService.updateById(id, payload)
        return res.status(200).json({
            data: response
        })
    } catch (error) {
        res.status(404).json(handleErrorMessage(error))
    }
}