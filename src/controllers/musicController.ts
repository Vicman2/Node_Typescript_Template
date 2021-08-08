import express from 'express'
import musicServices from '../services/musicServices';
import appResponse from '../../lib/appResponse'

class MusicCtrl{
    async addMusic(req: express.Request, res: express.Response){

        const musicData = {
            ...req.body, 
            files: req.files
        }

        const response = await musicServices.addMusic(musicData)
        res.send(appResponse("Music added successfully", response))
    }

  
}

export default new MusicCtrl()