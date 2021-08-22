import express from 'express';
import UserController from '../controllers/userController'
import { authentication } from '../middlewares/auth';
import { Validator } from '../validator';
import { AddUserSchema, MakeArtistSchema } from '../validator/userSchema';
import { ParamIdSchema } from '../validator/utilValidator';

const router = express.Router()

router.post('/addUser',
    Validator(AddUserSchema, "body"),
    UserController.addUser
)

router.get('/getUser/:id', 
    Validator(ParamIdSchema, "params"),
    authentication, 
    UserController.fetchUser
)

router.get('/login',
    UserController.loginUser
)

router.get('/fetchUsers',
    authentication,
    UserController.fetchUsers
)


router.put("/makeArtist/:id", 
    Validator(ParamIdSchema, "params"),
    Validator(MakeArtistSchema, "body"),
    authentication, 
    UserController.makeArtist
)

router.patch("/followAndUnfollow/:id", 
    Validator(ParamIdSchema, "params"),
    authentication, 
    UserController.followAndUnfollowUser
)

export default router