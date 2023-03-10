import { User, } from "@/models/user.model";
import { LoginRequest, RegisterRequest } from "@/utils/request";
import * as bcrypt from 'bcryptjs'
import { decodeToken, generateToken } from '../utils/jwt';

export const register = async (payload: RegisterRequest) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hasdPassword = await bcrypt.hash(payload.password, salt)

        const registerUser = await User.create({
            name: payload.name,
            email: payload.email,
            password: hasdPassword,
            role: payload.role
        })
        return registerUser;

    } catch (error) {
        throw error
    }
}

export const login = async (payload: LoginRequest) => {
    try {
        const user = await User.findOne({ email: payload.email })
        if (!user) {
            return null
        }

        //check existed refeshtoken
        if (!user.refeshToken) {
            const payloadToken = {
                id: user._id,
                role: user.role,
                email: user.email,
                name: user.name
            }
            const refeshtoken = await generateToken(payloadToken, 60 * 60 * 24);
            await User.findOne({ _id: user._id }).updateOne({ refeshToken: refeshtoken })
        } else {
            //check token expired

            try {
                await decodeToken(user.refeshToken)
            } catch (error) {

                const payloadToken = {
                    id: user._id,
                    role: user.role,
                    email: user.email,
                    name: user.name
                }
                const refeshtoken = await generateToken(payloadToken, 60 * 60 * 24);
                await User.findOne({ _id: user._id }).updateOne({ refeshToken: refeshtoken })

            }
        }
        return await User.findById({ _id: user._id })
    } catch (error) {
        throw error
    }
}