import {Request, Response, NextFunction} from 'express';
import { userRoleMiddleware } from './userRoleMiddleware';
import { verify } from 'jsonwebtoken';
import { SECRET_KEY } from '../config/token';
export function authTokenMiddleware(req: Request, res: Response, next: NextFunction){
    const token = req.headers.authorization
    // const cookies = req.cookies
    if (token){

        if (token === undefined){
            return res.sendStatus(401)
        }

        const varifyToken = verify(token,  SECRET_KEY)
        // const token = verify(cookies.token, SECRET_KEY)
        // console.log("user authenticated ")
        res.locals.user = varifyToken
        next(userRoleMiddleware)
    } else {
        res.sendStatus(401)
    }
}

