import express from 'express';
import MusicController from '../controllers/musicController'
import upload from '../../lib/multer';
import { Validator } from '../validator';
import { AddMusicFileSchema, AddMusicTextDataSchema } from '../validator/musicSchema';

const router = express.Router()

router.post('/addMusic',
    upload.array("musicFile"),
    Validator(AddMusicFileSchema, "files"),
    Validator(AddMusicTextDataSchema, "body"),
    MusicController.addMusic
)


export default router