import express from 'express';
import {CommonRoutesConfig} from './commonRoute';
import UserRoute from './userRoute';

const router = express.Router()
function rootRoute(){
    router.use('/users', UserRoute.configureRoutes())

    return router
}

export default rootRoute

