import {Request, Response, NextFunction} from 'express';
import { verify } from 'jsonwebtoken';
import { SECRET_KEY } from '../config/token';


interface IToken {
    iat: number
    exp: number
    id: number
}

export function authTokenMiddleware(req: Request, res: Response, next: NextFunction){

    const auth = req.headers.authorization
    if (!auth){
        res.json({status: 'error', message: 'Ошибка дон'})
        return
    }
    const [type, token] = auth.split(' ')

    if( type !== 'Bearer' || !token){
        res.json({status: 'error', message: 'Ошибка токена или типа дон'})
        return
    }


    try{
        const decodedToken = verify(token, SECRET_KEY) as IToken
        res.locals.userId = decodedToken.id
        next()
    } catch (err) {
        res.json({status: 'error', message: 'плохой токен дон'})
    }

}

