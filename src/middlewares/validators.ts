import Joi from 'joi'



const addUserSchema = Joi.object({
    email: Joi.string().email().required(), 
    password: Joi.string().min(3).required(),
    name: Joi.string().required(),
    bank_name: Joi.string().required(),
    bank_acc_name: Joi.string().required(), 
    bank_acc_no: Joi.string().required(),
    referral: Joi.string().optional(), 
    phone: Joi.string().min(11).required(), 
    interest: Joi.string().optional()
})

export {
    addUserSchema
}