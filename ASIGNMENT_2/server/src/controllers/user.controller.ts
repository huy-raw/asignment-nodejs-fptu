import { handleErrorMessage } from "@/utils/error";
import { Request, Response } from "express";
import * as UserService from 'services/user.service'



export const getAllUser = async (req: Request, res: Response) => {
    try {
        const response = await UserService.getAll()
        return res.status(200).json({
            data: response
        })
    } catch (error) {
        return res.status(500).json(handleErrorMessage(error))
    }
}