import express from 'express'
import playlistServices from '../services/playlistServices';
import appResponse from '../../lib/appResponse'
import { AuthRequest } from '../Interfaces/UtilInterfaces';

class PlaylistCtrl{
    async addPlaylist(req: AuthRequest, res: express.Response){
        const userData = req.user!
        const playlistData = req.body
        const response = await playlistServices.addPlaylist(userData, playlistData)
        res.status(201).send(appResponse("Playlist created successfully", response))
    }

    
}

export default new PlaylistCtrl()