import express, { Express, Request, Response } from 'express'
import servicesList from "./userServices"


function login(req: Request, res: Response){
    res.render('login')
}

async function authLogin(req: Request, res: Response){
    const auth = await servicesList.authLogin(req.body.email , req.body.password)
    // console.log(auth)
    if (auth){
        res.cookie('user', auth)
        // console.log('yes')
        res.send(auth)
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
        res.cookie('user', reg)
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