import express, { Express, Request, Response } from 'express'
import servicesList from "./userServices"


function login(req: Request, res: Response){
    res.render('login')
}

async function authLogin(req: Request, res: Response){
    // console.log(req.query)
    // console.log(req.params.email)
    // console.log(req.body)
    const auth = await servicesList.authLogin(req.body.email , req.body.password)
    // console.log(auth)
    res.cookie('user', auth)
    res.send(auth)
    // req.cookies
}

function registration(req: Request, res: Response){
    res.render('reg')
}

function authRegistratation(req: Request, res: Response){
    const data = req.body
    console.log(data)
}

const controllersUser = {
    login: login,
    authLogin: authLogin,
    registration: registration,
    authRegistratation: authRegistratation
}


export default controllersUser;