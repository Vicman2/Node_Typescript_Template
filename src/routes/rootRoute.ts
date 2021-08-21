import express from 'express';
import UserRoute from './userRoute';
import MusicRoute from './musicRoute'
import PlaylistRoutes from './playlistRoutes'

const router = express.Router()


router.use('/users', UserRoute)
router.use('/music', MusicRoute)
router.use('/playlist',PlaylistRoutes)


export default router

