import nationRouter from '@/routes/nation.router';
import playerRouter from '@/routes/player.router';
import userRouter from '@/routes/user.router';
import express, { Express, Request, Response } from 'express';
import * as path from "path";
require('dotenv').config()

export const app = () => {

    const app: Express = express();
    const port = process.env['PORT'] || 8080


    //set up view engine
    app.set("views", path.join(__dirname, "../views"));
    app.set('view engine', 'ejs');

    app.use('/static', express.static(path.join(__dirname, "../public")))
    app.get('/', (_req: Request, res: Response) => {
        // res.render('index');
        res.status(200).json("OK")
    });
    app.use('/nations', nationRouter)
    app.use('/players', playerRouter)
    app.use('/users', userRouter)

    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.listen(port, () => {
        return console.log(`Express is listening at http://localhost:${port}`);
    });
}

