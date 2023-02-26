import { axiosClient } from "../utils/axiosClient"

const ROUTE = 'auth'


export interface ILogin {
    email: string
    password: string
}

const login = async ({ email, password }: ILogin) => {
    try {
        const response = await axiosClient.post(`/${ROUTE}/login`, { password, email })
        return response
    } catch (error) {
        throw error
    }
}

export interface IRegister {
    name: string
    email: string
    password: string
}

const register = async ({ name, password, email }: IRegister) => {
    try {
        const response = await axiosClient.post(`/${ROUTE}/register`, { name, password, email })
        return response.data
    } catch (error) {
        throw error
    }
}

const authService = {
    login,
    register
}

export default authService