import express, { Express, Request, Response } from 'express'
import userRepository from './userRepository'


async function authLogin(email:String, password:String){
    // const emailProtect = await userRepository.findUserByEmail
    const context = {
        email: email,
        password: password
    }
    // if (context.password === "3"){
    //     emailProtect(context.email)
    // }

    return context
}


const servicesList = {
    authLogin: authLogin,
}

export default servicesList