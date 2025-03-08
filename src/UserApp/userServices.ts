import userRepository from './userRepository'
import { User, CreateUser } from './types'
import { IError, ISuccess } from '../types/types'
import { compare, hash } from 'bcrypt'
import { sign } from 'jsonwebtoken';
import { SECRET_KEY } from '../config/token';



async function authLogin(email:string, password:string): Promise< ISuccess<string> | IError >{
    let user = await userRepository.findUserByEmail(email)

    if(!user){
        return {status: 'error', message: 'користувач не найден'} 
    }

    const comparePassword = compare(password, user.password)

    if(!comparePassword){
        return {status: 'error', message: 'Паролі не співпадають'} 
    }

    const token = sign({id: user.id}, SECRET_KEY, {expiresIn: '12h'})

    return {status: 'success', data: token}
}

async function authRegistratation(data: CreateUser): Promise< ISuccess<string> | IError >{
    const find = await userRepository.findUserByEmail(data.email)
    if(find){
        return {status: 'error', message: 'user exists'} 
    }

    const hashedPassword = await hash(data.password, 10)

    const userData = {
        ...data,
        password: hashedPassword
    }
    const newUser = await userRepository.createUser(userData)
    if (!newUser) {
        return {status: 'error', message: 'create error yo'}
    }

    const token = sign(newUser, SECRET_KEY, {expiresIn: '1h'})
    
    return {status: 'success', data: token};
}

async function getMe(id: number): Promise< ISuccess<User> | IError >{
    const user = await userRepository.findUserById(id);

    if (!user) {
        return {status: 'error', message: "Нету юзера дон"}
    }

    return {status: 'success', data: user}
}

const servicesList = {
    authLogin: authLogin,
    authRegistratation: authRegistratation,
    getMe: getMe,
}

export default servicesList