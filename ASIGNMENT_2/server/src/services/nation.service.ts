import { INation, Nation } from "@/models/nation.model";
import { CreateNationRequest, UpdateNationRequest, QueryOption } from '../utils/request';

export const findAll = async (): Promise<any> => {
    try {
        return await Nation.find();
    } catch (error) {
        throw error
    }
}

export const findByOption = async (option: QueryOption) => {
    try {
        const count = await Nation.count()
        const currentPage: number = option.page
        const filter = JSON.parse(option.filter)
        const sort = JSON.parse(option.sort)

        const queryResponse = await Nation
            .find(filter)
            .skip((currentPage - 1) * option.limit)
            .limit(option.limit)
            .sort(sort)
            .exec()
        return {
            totalItems: queryResponse.length,
            data: queryResponse,
            totalPages: Math.ceil(count / option.limit),
            currentPage: currentPage
        }
    } catch (error) {
        throw error
    }
}

export const findById = async (id: String) => {
    try {
        return await Nation.findById({ _id: id });
    } catch (error) {
        throw error
    }
}

export const create = async (payload: CreateNationRequest) => {
    try {
        return await Nation.create(payload);
    } catch (error) {
        throw error
    }
}

export const deleteById = async (id: String) => {
    try {
        return Nation.deleteOne({ _id: id });
    } catch (error) {
        throw error
    }
}

export const updateById = async (id: String, payload: UpdateNationRequest) => {
    try {
        return Nation.where({ _id: id }).update({
            name: payload.name,
            description: payload.description
        })
    } catch (error) {
        throw error
    }
}
