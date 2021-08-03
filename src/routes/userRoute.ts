import express from 'express';
import { CommonRoutesConfig } from './commonRoute';
import UserController from '../controllers/userController'
import { Validator } from '../validator';
import { AddUserSchema } from '../validator/userSchema';


class UserRoute extends CommonRoutesConfig{
    constructor(router: express.Router) {
        super(router, 'UsersRoutes');
    }
    
    configureRoutes(){
        this.router.post('/addUser',
            Validator(AddUserSchema, "body"),
            UserController.addUser
        )
        this.router.get('/login',
            UserController.loginUser
        )

        this.router.get('/fetchUsers',
            UserController.fetchUsers
        )
        return this.router
    }
}

export default new UserRoute(express.Router())