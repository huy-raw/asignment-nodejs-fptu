import { axiosClient } from '../utils/axiosClient';
import { INation } from '../utils/types';

const ROUTE = 'nations';

const findAll = async () => {
    try {
        const response = await axiosClient.get(`/${ROUTE}/`)
        console.log(response.data);
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

const createNation = async (payload?: INation) => {
    try {
        const response = await axiosClient.post(`/${ROUTE}`, payload)
        return response.data
    } catch (error) {
        throw error
    }
}

const updateNation = async (payload?: INation, _id?: string) => {
    try {
        const response = await axiosClient.patch(`/${ROUTE}/${_id}`, payload)
        return response.data
    } catch (error) {
        throw error
    }
}

const deleteNation = async (_id: string) => {
    try {
        const response = await axiosClient.delete(`/${ROUTE}/${_id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

const nationService = {
    findAll,
    findById,
    createNation,
    updateNation,
    deleteNation
}

export default nationService