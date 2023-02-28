import { User, } from "@/models/user.model";
import { UpdateUserRequest } from "@/utils/request";


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

export const deleteUserById = async (id: String) => {
    try {
        return await User.deleteOne({ _id: id });
    } catch (error) {
        throw error
    }
}

export const updateUserById = async (id: String, param: UpdateUserRequest) => {
    try {
        await User.where({ _id: id }).update({
            name: param.name,
            email: param.email,
            password: param.password
        })
        return await User.findById({ _id: id });
    } catch (error) {
        throw error
    }
}