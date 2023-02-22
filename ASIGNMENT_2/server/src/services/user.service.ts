import { User, } from "@/models/user.model";


export const findById = async (id: String) => {
    try {
        return await User.findById({ _id: id })
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