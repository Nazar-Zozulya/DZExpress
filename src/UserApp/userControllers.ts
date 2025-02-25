import express, { Express, Request, Response } from 'express'
import servicesList from "./userServices"
import { SECRET_KEY } from '../config/token'
import { sign } from 'jsonwebtoken'


async function authLogin(req: Request, res: Response){
    const result = await servicesList.authLogin(req.body.email , req.body.password)

    res.json(result)
}

async function authRegistratation(req: Request, res: Response){
    const data = req.body
    const result = await servicesList.authRegistratation(data)

    res.json(result)
}
const controllersUser = {
    authLogin: authLogin,
    authRegistratation: authRegistratation
}


export default controllersUser;