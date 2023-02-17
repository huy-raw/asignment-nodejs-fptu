import { axiosClient } from "../utils/axiosClient";


const ROUTE = 'players'
const findAll = async () => {
    try {
        const response = await axiosClient.get(`/${ROUTE}/`)
        return response.data
    } catch (error) {
        throw error
    }
}


const findById = async (_id: string) => {
    try {
        const response = await axiosClient.get(`/${ROUTE}/${_id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

const createPlayer = async (payload: any) => {
    try {
        const response = await axiosClient.post(`/${ROUTE}/`, payload)
        return response.data
    } catch (error) {
        throw error
    }
}

const updatePlayer = async (payload: any, id: string) => {
    try {
        const response = await axiosClient.patch(`/${ROUTE}/${id}`, payload)
        return response.data
    } catch (error) {
        throw error
    }
}

const deletePlayer = async (id: string) => {
    try {
        const response = await axiosClient.delete(`/${ROUTE}/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}




const playerService = {
    findAll,
    findById,
    updatePlayer,
    deletePlayer,
    createPlayer
}

export default playerService