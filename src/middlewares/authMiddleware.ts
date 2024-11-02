import {Request, Response, NextFunction} from 'express';
import { userRoleMiddleware } from './userRoleMiddleware';
export function authMiddleware(req: Request, res: Response, next: NextFunction){
    const cookies = req.cookies
    if (cookies.user.email, cookies.user.username, cookies.user.password){
        console.log("user authenticated ")
        next(userRoleMiddleware)
    } else {
        res.sendStatus(401)
    }
}

