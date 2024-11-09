import {Request, Response, NextFunction} from 'express';
import { userRoleMiddleware } from './userRoleMiddleware';
import { verify } from 'jsonwebtoken';
import { SECRET_KEY } from '../config/token';
export function authMiddleware(req: Request, res: Response, next: NextFunction){
    const cookies = req.cookies
    if (cookies.token){
        const token = verify(cookies.token, SECRET_KEY)
        console.log("user authenticated ")
        res.locals.user = token
        next(userRoleMiddleware)
    } else {
        res.sendStatus(401)
    }
}

