import { handleErrorMessage } from "@/utils/error";
import { LoginRequest } from "@/utils/request";
import { Request, Response } from "express";
import * as UserService from 'services/user.service'
import * as bcrypt from 'bcryptjs'
import { RegisterRequest } from '../utils/request';
import { generateToken } from '../utils/jwt';


export const login = async (req: Request, res: Response) => {
    try {
        const loginPayload: LoginRequest = {
            email: req.body.email,
            password: req.body.password
        }
        //check username
        const user = await UserService.login(loginPayload);
        if (!user) {
            return res.status(422).json("Uncorrect email or password!!")
        }
        //check password
        const checkPassword = await bcrypt.compare(loginPayload.password, user?.password)
        if (!checkPassword) {
            return res.status(422).json("Uncorrect email or password!!")
        }

        const payload: any = {
            id: user._id,
            role: user.role
        }

        const accessToken: string = await generateToken(payload, 60 * 60);


        return res.status(200)
            .setHeader('AccessToken', 'Bearer ' + accessToken)
            .setHeader('RefeshToken', user.refeshToken)
            .json({
                data: user,
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