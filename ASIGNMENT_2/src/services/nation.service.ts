import { INation, Nation } from "@/models/nation.model";

export const findAll = async (): Promise<any> => {
    try {
        return await Nation.find();
    } catch (error) {
        console.log(error)
    }
}

export const findById = async (id: String): Promise<any> => {
    try {
        return await Nation.findById({ _id: id });
    } catch (error) {
        console.log(error)
    }
}

export const create = async (payload: INation): Promise<any> => {
    try {
        const response = await Nation.create(payload);
        return response;
    } catch (error) {
        console.log(error)
    }
}

export const deleteOne = async (id: String): Promise<any> => {
    try {
        return Nation.deleteOne({ _id: id });
    } catch (error) {
        console.log(error)
    }
}

export const updateOne = async (id: String, payload: INation): Promise<any> => {
    try {
        return Nation.where({ _id: id }).update({
            name: payload.name,
            description: payload.description
        })
    } catch (error) {
        console.log(error)
    }
}
