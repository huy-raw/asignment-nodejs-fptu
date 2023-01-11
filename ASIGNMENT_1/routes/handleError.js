export const handleError = (func) => { 
    return (req, res) => {
        try {
            func(req, res)
        } catch (error) {
            return res.status(403).json('Unsupported.')
        }
    }
}