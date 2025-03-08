import { Request, Response } from 'express'
import servicesList from "./userServices"

async function authLogin(req: Request, res: Response){
    const result = await servicesList.authLogin(req.body.email , req.body.password)

    res.json(result)
}

async function authRegistratation(req: Request, res: Response){
    const data = req.body
    const result = await servicesList.authRegistratation(data)

    res.json(result)
}

async function seeMe(req: Request, res: Response){
    const id = res.locals.userId
    const result = await servicesList.getMe(id)

    res.json(result)
}
const controllersUser = {
    authLogin: authLogin,
    authRegistratation: authRegistratation,
    seeMe: seeMe,
}


export default controllersUser;