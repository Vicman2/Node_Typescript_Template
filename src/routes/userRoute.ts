import express from 'express';
import UserController from '../controllers/userController'
import { Validator } from '../validator';
import { AddUserSchema } from '../validator/userSchema';

const router = express.Router()

router.post('/addUser',
    Validator(AddUserSchema, "body"),
    UserController.addUser
)

router.get('/login',
    UserController.loginUser
)

router.get('/fetchUsers',
    UserController.fetchUsers
)


export default router