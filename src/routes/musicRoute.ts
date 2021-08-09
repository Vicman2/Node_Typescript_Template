import express from 'express';
import MusicController from '../controllers/musicController'
import upload from '../../lib/multer';
import { Validator } from '../validator';
import { AddMusicFileSchema, AddMusicTextDataSchema, EditMusicFileSchema } from '../validator/musicSchema';
import { authentication } from '../middlewares/auth';
import { ParamIdSchema } from '../validator/utilValidator';

const router = express.Router()

router.post('/addMusic',
    upload.array("musicFile"),
    Validator(AddMusicFileSchema, "files"),
    Validator(AddMusicTextDataSchema, "body"),
    authentication,
    MusicController.addMusic
)

router.get('/getMusic/:id', 
    Validator(ParamIdSchema, "params"),
    authentication, 
    MusicController.getMusic
)

router.get('/getMany', 
    authentication, 
    MusicController.getManyMusic
)

router.put('/editMusic/:id', 
    upload.array("musicFile"),
    Validator(ParamIdSchema, "params"),
    Validator(EditMusicFileSchema, "files"),
    Validator(AddMusicTextDataSchema, "body"),
    authentication,
    MusicController.editMusic
)

router.delete('/deleteMusic/:id',
    Validator(ParamIdSchema, "params"),
    authentication, 
    MusicController.deleteMusic
)


export default router