import { handleErrorMessage } from "@/utils/error";
import { Request, Response } from "express";
import * as UserService from 'services/user.service'
import { isNil } from 'lodash';



export const getAllUser = async (req: Request, res: Response) => {
    try {
        const response = await UserService.getAll()
        return res.status(200).json({
            data: response
        })
    } catch (error) {
        return res.status(404).json(handleErrorMessage(error))
    }
}

export const getUserById = async (req: Request, res: Response) => {
    try {
        const id: any = req.params["id"]
        const response = await UserService.findById(id);
        if (isNil(response)) {
            return res.status(404).json("No content")
        }
        return res.status(200).json({
            data: response
        })
    } catch (error) {
        return res.status(404).json(handleErrorMessage(error))
    }
}