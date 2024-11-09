import express, { Express, Request, Response } from 'express'
import userRepository from './userRepository'


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

async function authRegistratation(username:any ,email:any, password:any){
    const find = await userRepository.findUserByEmail(email)
    if(find?.email === email){
        console.log(find)
        console.log('user Exists')
        return find
    } else{
        const user = await userRepository.createUser(username,email,password)
        console.log('User created')
        console.log(user)
    }
    
    
    const context = {
        username: username,
        email: email,
        password: password
    }

    return context
}

const servicesList = {
    authLogin: authLogin,
    authRegistratation: authRegistratation
}

export default servicesList