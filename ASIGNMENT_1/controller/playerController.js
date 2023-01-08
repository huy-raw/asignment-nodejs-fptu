

const playerController = {
    getAllPlayer: async (req, res) => {
        res.status(200).json("GET all player")
    },
    createPlayer: async(req, res) => {
        res.status(201).end('PUSH the player: ' + req.body.name + ' with details: ' + req.body.description);
    },
    getPlayerById: async( req, res) => {
        res.status(200).json(`GET player have ID: ${req.params.playerId}`)
    },
    updatePlayerById: async (req, res) => {
        res.status(200).json(`UPDATE player have ID: ${req.params.playerId}`)
    },
    deletePlayer: async(req, res) => {
        res.status(200).json(`DELETE player have ID ${req.params.playerId}`)
    }

    
}
export default playerController
