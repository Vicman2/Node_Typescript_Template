import express from 'express';
import UserRoute from './userRoute';
import MusicRoute from './musicRoute'

const router = express.Router()


router.use('/users', UserRoute)
router.use('/music', MusicRoute)


export default router

