import express, { Express, Request, Response } from 'express'
import userRepository from './userRepository'
import { Prisma } from "@prisma/client";


interface IUserRegSuccess{
    status: "success"
    data: IUser
}

interface IUserRegError{
    status:  'error'
    message: string
}

interface IUser{
    username: string
    email: string
    password: string
}

async function authLogin(email:any, password:any){
    const findEmail = await userRepository.findUserByEmail
    var user = await findEmail(email)
    // console.log(user)
    if(user?.password === password){
        user?.email === email
    }
    // const context = {
    //     email: email,
    //     password: password
    // }

    return user
}

async function authRegistratation(data: Prisma.UserCreateInput): Promise< IUserRegSuccess | IUserRegError >{
    const find = await userRepository.findUserByEmail(data.email)
    const create = await userRepository.createUser(data)
    if(find){
        // console.log(find)
        // console.log('user Exists')
        return {status: 'error', message: 'user exists'} 
    } 
    if(!create){
        // console.log('User created')
        return {status: 'error', message: 'error create'} 
    }
    
    return {status: 'success', data: create};
}

const servicesList = {
    authLogin: authLogin,
    authRegistratation: authRegistratation
}

export default servicesList