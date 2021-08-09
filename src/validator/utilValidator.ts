import Joi from 'joi'

const ParamIdSchema = Joi.object({
    id: Joi.string().required()
})

export {
    ParamIdSchema
}