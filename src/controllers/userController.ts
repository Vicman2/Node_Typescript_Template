import express from 'express'
import UserServices from '../services/userServices';
import appResponse from '../../lib/appResponse'
import { AuthRequest } from '../Interfaces/UtilInterfaces';

class UserCtrl{
    async addUser(req: express.Request, res: express.Response){
        const userData = req.body;
        const response = await UserServices.addUser(userData)
        res.send(appResponse("User created successfully", response))
    }

    async fetchUsers(req: AuthRequest, res: express.Response){
        const response = await UserServices.getUsers()
        res.send(appResponse("Users fetched successfully", response))
    }

    async loginUser(req:express.Request, res: express.Response){
        const loginDetails = req.body
        const response = await UserServices.login(loginDetails)
        res.send(appResponse("User logedin successfully", response))
    }

    async fetchUser(req: AuthRequest, res: express.Response){
        const userData = req.user
        const fetchData = req.params
        const response = await UserServices.getUser(userData,fetchData )
        res.send(appResponse("User fetched successfully", response))
    }

    async makeArtist(req: AuthRequest, res: express.Response){
        const userData = req.user
        const artistData = {
            ...req.params, 
            ...req.body
        }
        const response = await UserServices.makeArtist(userData,artistData )
        res.send(appResponse("User made artist successfully", response))

    }
}

export default new UserCtrl()