// Импорт не используется, нужно убрать и не должен быть в сервисе
import express, { Express, Request, Response } from 'express'
import userRepository from './userRepository'
import { Prisma } from "@prisma/client";
import { User } from './types'
import { IError, ISuccess } from '../types/types'
import { compare, hash } from 'bcrypt'
// Импорт не используется, нужно убрать
import { JwtPayload, sign } from 'jsonwebtoken';
import { SECRET_KEY } from '../config/token';

// interface IUserRegSuccess{
//     status: "success"
//     data: IUser
// }

// interface IUserRegError{
//     status:  'error'
//     message: string
// }

// interface IUser{
//     username: string
//     email: string
//     password: string
// }
// any????
async function authLogin(email:any, password:any): Promise< ISuccess<string> | IError >{
    // один хорошо, а два лучше?))
    let user = await await userRepository.findUserByEmail(email)

    if(!user){
        return {status: 'error', message: 'користувач не найден'} 
    }
    // вызов в холостую, запиши результат в переменную
    compare(user.password, password)
    // и вот тут проверяй созданную перменную
    if(!compare){
        return {status: 'error', message: 'Паролі не співпадають'} 
    }
    // лучше больше часа конечно ставить
    const token = sign({id: user.id}, SECRET_KEY, {expiresIn: '1h'})

    return {status: 'success', data: token}
}
// тип для data должен быть в types
async function authRegistratation(data: Prisma.UserCreateInput): Promise< ISuccess<string> | IError >{
    const find = await userRepository.findUserByEmail(data.email)
    // создание важно делать ПОСЛЕ ошибок связанных с find
    const create = await userRepository.createUser(data)
    if(find){
        return {status: 'error', message: 'user exists'} 
    }
    
    if(!create){
        return {status: 'error', message: 'error create'} 
    }

    // хеш в холостую, тоже записываем в переменную и вместо salt указываем раунды
    // password нужно использовать из data 
    hash(create?.password, 'salt')

    const token = sign(create, SECRET_KEY, {expiresIn: '1h'})
    
    return {status: 'success', data: token};
}
// лучше getMe
async function seeMe(id: number): Promise< ISuccess<User> | IError >{
    const user = await userRepository.findUserById(id);

    if (!user) {
        return {status: 'error', message: "Нету юзера дон"}
    }

    return {status: 'success', data: user}
}

const servicesList = {
    authLogin: authLogin,
    authRegistratation: authRegistratation,
    seeMe: seeMe,
}

export default servicesList