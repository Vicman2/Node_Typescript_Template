import Joi from 'joi'


const AddUserSchema = Joi.object({
    email: Joi.string().email().required(), 
    password: Joi.string().min(3).required(), 
    firstname: Joi.string().min(3).required(),
    lastname: Joi.string().min(3).required()
})


export {
    AddUserSchema
}