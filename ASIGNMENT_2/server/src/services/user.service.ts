import { User, } from "@/models/user.model";
import { LoginRequest, RegisterRequest } from "@/utils/request";
import * as bcrypt from 'bcryptjs'


export const register = async (payload: RegisterRequest) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hasdPassword = await bcrypt.hash(payload.password, salt)

        return await User.create({
            name: payload.name,
            email: payload.email,
            password: hasdPassword,
            role: payload.role
        })
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
       
        const checkPassword = await bcrypt.compare(payload.password, user?.password)
        if (!checkPassword) {
            return null
        }
        return user
    } catch (error) {
        throw error
    }
}

export const getAll = async () => {
    try {
        return await User.find();
    } catch (error) {
        throw error
    }
}

export const checkExistUser = async (email: string) => {
    try {
        return await User.where({ email: email }).findOne();
    } catch (error) {
        throw error
    }
}