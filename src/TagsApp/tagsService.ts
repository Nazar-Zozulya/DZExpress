// Импорт не используется, нужно убрать
import express, { Express, Request, Response } from 'express'
import tagsRepository from './tagsRepository'
// Импорт не используется, нужно убрать
import { Prisma } from "@prisma/client";
import { Tags } from './types'
import { IError, ISuccess } from '../types/types'

async function getAllTags(): Promise< ISuccess<Tags[]> | IError > {
    const tags = await tagsRepository.getAllTags()

    if(!tags){
        return {status: 'error', message: 'tags not found'};
    }
    
    return {status: 'success', data: tags}
}

const tagsServices = {
    getAllTags: getAllTags
}

export default tagsServices