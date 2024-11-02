import {Request, Response, NextFunction} from 'express';



export function userRoleMiddleware(req: Request, res: Response, next: NextFunction){
    const cookies = req.cookies
    if (cookies.user.role === 'admin'){
        console.log("user authenticated ")
        next()
    } else {
        res.sendStatus(403)
    }
}