import { Nation, NationModel } from 'models/nation.model'
import { RequestHandler, Request, Response } from 'express'

export const NationController = {
    getAll: async (req: Request, res: Response) => {
        try {
            const nation = Nation.find();
            return res.status(200).json(nation);
        } catch (error) {
            return res.status(404).json(error)
        }
    },
    create: async (req: Request, res: Response) => {
        try {
            const data: NationModel = req.body;
            console.log(data)
            await Nation.create(data);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

}



