import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import nationalRouter from './routes/nationalRouter.js'
import playerRouter from './routes/playerRouter.js'

const app = express()
const PORT = '5000';
const HOSTNAME = 'localhost';

app.use(express.json())


//ROUTERS
app.use('/nationals', nationalRouter)
app.use('/players', playerRouter)


app.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});

