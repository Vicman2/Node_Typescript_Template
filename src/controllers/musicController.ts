import express from 'express'
import musicServices from '../services/musicServices';
import appResponse from '../../lib/appResponse'
import { AuthRequest } from '../Interfaces/UtilInterfaces';

class MusicCtrl{
    async addMusic(req: AuthRequest, res: express.Response){
        const musicData = {
            ...req.body, 
            files: req.files
        }
        const userData = req.user!
        const response = await musicServices.addMusic(userData, musicData)
        res.status(201).send(appResponse("Music added successfully", response))
    }

    async getMusic(req:AuthRequest, res: express.Response){
        const userData = req.user!
        const musicData = {...req.params}
        const response = await musicServices.getMusic(userData, musicData)
        res.status(200).send(appResponse("Music fetched successfully", response))
    }

    async getManyMusic(req:AuthRequest, res: express.Response){
        const userData = req.user!
        const response = await musicServices.getManyMusic(userData)
        res.status(200).send(appResponse("Music fetched successfully", response))
    }

    async editMusic(req:AuthRequest, res: express.Response){
        const musicData = {
            ...req.params,
            ...req.body, 
            files: req.files
        }
        const userData = req.user!
        const response = await musicServices.updateMusic(userData, musicData)
        res.status(200).send(appResponse("Music updated successfully", response))
    }

    async deleteMusic(req: AuthRequest, res: express.Response){
        const userData = req.user!
        const musicData = {...req.params}
        const response = await musicServices.deleteMuisc(userData, musicData)
        res.status(200).send(appResponse("Music deleted successfully", response))
    }

    async likeMusic(req: AuthRequest, res: express.Response){
        const userData = req.user!
        const {id} = req.params
        const response = await musicServices.likeMusic(userData, id)
        res.status(200).send(appResponse("Music liked successfully", response))
    }
}

export default new MusicCtrl()