import data from '../data.json' assert  { type: "json" };

const nationalController = {
    getAllNational: async (req, res) => {
        // res.status(200).json(data.national)
        res.status(200).json('GET all national')
    },
    createNational: async (req, res) => {
        res.status(201).end('PUSH the nation: ' + req.body.name + ' with details: ' + req.body.description);
    },
    deleteNational: async (req, res) => {
        res.status(200).json(`DELETE the national have Id : ${req.params.nationalId}`)
    },
    getNationalById: async (req, res) => {
        res.status(200).json(`GET national have Id : ${req.params.nationalId}`)
    },
    updateNationalById: async (req, res) => {
        res.status(200).json(`UPDATE national have Id: ${req.params.nationalId}`)
    }

}

export default nationalController;