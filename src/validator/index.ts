import Joi from 'joi'
import express from 'express'
import { BadRequestError } from '../../lib/appError';

type Source = "body" | "query" | "params" | "file" | "files"

/**
 * 
 * @param schema - The joi validator object schema that entails how the data should look like
 * @param source - The property in the request data that should be validated 
 * @returns 
 */


const Validator  = (schema: Joi.ObjectSchema | Joi.ArraySchema, source : Source = "body") => (req: express.Request , res: express.Response,  next: express.NextFunction) => {
	
	const result = schema.validate(req[source])

	if (result.error) {
		throw new BadRequestError(result.error.message)
	}
	next();
};

export {Validator}