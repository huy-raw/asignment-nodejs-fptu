import { roleEnum } from "@/common/common";
import { NextFunction, Request, Response } from "express";
import { isNil } from "lodash";
import { decodeToken } from '../utils/jwt';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const accessTokenHeader: any = req.headers["authorization"]
        console.log(accessTokenHeader)
        if (isNil(accessTokenHeader)) {
            return res.status(400).json("Token unexisted!!");
        }
        const bearer = accessTokenHeader.split(" ");
        const accessToken = bearer[1];
        const result = await decodeToken(accessToken);
        if (!result) {
            return res.status(400).json('Token invalid')
        }
        if (result.role !== roleEnum.ADMIN) {
            return res.status(401).json('Invalid permision')
        }
        next()
    } catch (error) {
        return res.status(401).json("Unauthorized error");
    }
}