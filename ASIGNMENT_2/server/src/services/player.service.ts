import { IPlayer, Player } from "@/models/player.model";
import { CreatePlayerRequest, QueryOption, UpdatePlayerRequest } from '../utils/request';

export const findAll = async () => {
    try {
        return await Player.find().populate({
            path: "nation"
        });
    } catch (error) {
        throw error
    }
}

export const findByOption = async (option: QueryOption) => {
    try {
        const count = await Player.count()
        const currentPage: number = option.page
        const filter = JSON.parse(option.filter)
        const sort = JSON.parse(option.sort)

        const queryResponse = await Player
            .find(filter)
            .skip((currentPage - 1) * option.limit)
            .limit(option.limit)
            .sort(sort)
            .exec()

        return {
            totalItems: queryResponse.length,
            data: queryResponse,
            totalPages: Math.ceil(count / option.limit),
            currentPage: currentPage,
        }
    } catch (error) {
        throw error
    }
}
export const checkExitsPlayer = async (name: string) => {
    try {
        return await Player.findOne({ name: name }).exec()
    } catch (error) {

    }
}
export const create = async (payload: CreatePlayerRequest): Promise<any> => {
    try {
        const user = await Player.create(payload);
        return user
    } catch (error) {
        throw error
    }
}

export const findById = async (id: String): Promise<any> => {
    try {
        return await Player.findById({ _id: id }).populate("nation")
    } catch (error) {
        throw error
    }
}

export const deleteById = async (id: String): Promise<any> => {
    try {
        return await Player.deleteOne({ _id: id });
    } catch (error) {
        throw error
    }
}

export const updateById = async (id: String, payload: UpdatePlayerRequest): Promise<any> => {
    try {
        return await Player.where({ _id: id }).update({
            name: payload.name,
            club: payload.club,
            goals: payload.goals,
            image: payload.image,
            isCaptain: payload.isCaptain,
            posision: payload.position,
            nation: payload.nation
        })
    } catch (error) {
        throw error
    }
}

