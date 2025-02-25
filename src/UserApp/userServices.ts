import express, { Express, Request, Response } from 'express'
import userRepository from './userRepository'
import { Prisma } from "@prisma/client";
import { User } from './types'
import { IError, ISuccess } from '../types/types'
import { compare, hash } from 'bcrypt'
import { sign } from 'jsonwebtoken';
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

async function authLogin(email:any, password:any): Promise< ISuccess<string> | IError >{
    let user = await await userRepository.findUserByEmail(email)

    if(!user){
        return {status: 'error', message: 'користувач не найден'} 
    }

    compare(user.password, password)
    if(!compare){
        return {status: 'error', message: 'Паролі не співпадають'} 
    }

    const token = sign(user, SECRET_KEY, {expiresIn: '1h'})

    return {status: 'success', data: token}
}

async function authRegistratation(data: Prisma.UserCreateInput): Promise< ISuccess<string> | IError >{
    const find = await userRepository.findUserByEmail(data.email)
    const create = await userRepository.createUser(data)
    if(find){
        return {status: 'error', message: 'user exists'} 
    }
    
    if(!create){
        return {status: 'error', message: 'error create'} 
    }


    hash(create?.password, 'salt')

    const token = sign(create, SECRET_KEY, {expiresIn: '1h'})
    
    return {status: 'success', data: token};
}

const servicesList = {
    authLogin: authLogin,
    authRegistratation: authRegistratation
}

export default servicesList