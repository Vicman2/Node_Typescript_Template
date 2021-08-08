import express from 'express'
import UserServices from '../services/userServices';
import appResponse from '../../lib/appResponse'

class UserCtrl{
    async addUser(req: express.Request, res: express.Response){
        const userData = req.body;
        const response = await UserServices.addUser(userData)
        res.send(appResponse("User created successfully", response))
    }

    async fetchUsers(req: express.Request, res: express.Response){
        const response = await UserServices.getUsers()
        res.send(appResponse("User created successfully", response))
    }

    async loginUser(req:express.Request, res: express.Response){
        const loginDetails = req.body
        const response = await UserServices.login(loginDetails)
        res.send(appResponse("User logedin successfully", response))
    }

    async fetchUser(req: express.Request, res: express.Response){
        const userData = req.body
        const response = await UserServices.getUser(userData)
        res.send(appResponse("User logedin successfully", response))
    }
}

export default new UserCtrl()