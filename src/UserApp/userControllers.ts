import express, { Express, Request, Response } from 'express'
import servicesList from "./userServices"
import { SECRET_KEY } from '../config/token'
import { sign } from 'jsonwebtoken'


function login(req: Request, res: Response){
    res.render('login')
}

async function authLogin(req: Request, res: Response){
    const auth = await servicesList.authLogin(req.body.email , req.body.password)
    // console.log(auth)
    if (auth){
        const token = sign(auth, SECRET_KEY, {expiresIn: '1h'})
        res.cookie('user', token)
        // console.log('yes')
        res.send(token)
    } else {
        // console.log('not')
        res.sendStatus(401)
    }
}

function registration(req: Request, res: Response){
    res.render('reg')
}

async function authRegistratation(req: Request, res: Response){
    const reg = await servicesList.authRegistratation(req.body.username, req.body.email, req.body.password)

    if (reg){
        const token = sign(reg, SECRET_KEY, {expiresIn: '1h'})
        res.cookie('user', token)
        // console.log('yes')
        res.send(reg)
    }

}
const controllersUser = {
    login: login,
    authLogin: authLogin,
    registration: registration,
    authRegistratation: authRegistratation
}


export default controllersUser;