import { axiosClient } from '../utils/axiosClient';



const findAll = async () => {
    try {
        const response = await axiosClient.get(`/nations?filter={}&sort=[]`)
        console.log(response.data);
        return response.data
    } catch (error) {
        throw error
    }
}

const findById = async (id: string) => {
    const response = await axiosClient.get(`/nations/${id}`)
    return response.data
}


const NationService = {
    findAll,
    findById
}

export default NationService