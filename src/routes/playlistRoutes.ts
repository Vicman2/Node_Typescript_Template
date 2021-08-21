import express from 'express';
import PlaylistController from '../controllers/playlistController'
import { Validator } from '../validator';
import { addPlaylistSchema } from '../validator/playlistSchema';
import { authentication } from '../middlewares/auth';
import { ParamIdSchema } from '../validator/utilValidator';

const router = express.Router()

router.post('/addPlaylist',
    Validator(addPlaylistSchema),
    authentication,
    PlaylistController.addPlaylist
)






export default router