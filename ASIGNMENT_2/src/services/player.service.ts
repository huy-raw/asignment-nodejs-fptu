import { IPlayer, Player } from "@/models/player.model";

export const findAll = async (): Promise<any> => {
    try {
        return await Player.find().populate({
            path: "nation"
        });
    } catch (error) {
        console.log(error)
    }
}

export const create = async (payload: IPlayer): Promise<any> => {
    try {
        console.log(payload);
        return await Player.create(payload);
    } catch (error) {
        console.log(error)
    }
}

export const findById = async (id: String): Promise<any> => {
    try {
        return await Player.findById({ _id: id }).populate("nation")
    } catch (error) {
        console.log(error)
    }
}

export const deleteById = async (id: String): Promise<any> => {
    try {
        return await Player.deleteOne({ _id: id });
    } catch (error) {
        console.log(error);
    }
}

export const updateById = async (id: String, payload: IPlayer): Promise<any> => {
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
        console.log(error);
    }
}