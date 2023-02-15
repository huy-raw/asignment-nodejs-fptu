import { handleErrorMessage } from "@/utils/error";
import { LoginRequest } from "@/utils/request";
import { Request, Response } from "express";
import * as UserService from 'services/user.service'
import { RegisterRequest } from '../utils/request';



export const login = async (req: Request, res: Response) => {
    try {
        const payload: LoginRequest = {
            email: req.body.email,
            password: req.body.password
        }
        const login = await UserService.login(payload);

        if (login == null) {
            return res.status(401).json("Uncorrect email or password!!")
        }
    
        return res.status(200).json({
            data: login,
            message: "Login successfully"
        })

    } catch (error) {
        return res.status(500).json(handleErrorMessage(error))
    }
}

export const register = async (req: Request, res: Response) => {
    try {
        const payload: RegisterRequest = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        }
        //check exist email
        const checkExistUser = await UserService.checkExistUser(payload.email)
        if (checkExistUser) {
            return res.status(400).json(`Email ${payload.email} was exist in system!`)
        }

        const register = await UserService.register(payload);

        if (!register) {
            return res.status(400).json(`Can\'\t register user with email ${payload.email} `)
        }

        return res.status(200).json({
            data: register,
            message: "Register succesfully!!"
        })
    } catch (error) {
        return res.status(500).json(handleErrorMessage(error))
    }
}

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