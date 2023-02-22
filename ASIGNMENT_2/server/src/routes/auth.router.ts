
import express from 'express'
import bodyParser from 'body-parser'
import * as AuthController from 'controllers/auth.controller'

const authRouter = express.Router();
authRouter.use(bodyParser.json());

authRouter
    .post('/login', AuthController.login)
    .post('/register', AuthController.register)
    .post('/logout', ()=>{
        console.log("asdasdassadsaasd")
    })


export default authRouter


