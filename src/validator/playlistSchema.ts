import Joi from 'joi'


const addPlaylistSchema = Joi.object({
    name: Joi.string().required(), 
    information: Joi.string().min(3).required(), 
    music: Joi.array().items(Joi.string().required()).min(1).required()
})


export{
    addPlaylistSchema
}