import mongoose from "mongoose"
import express from "express"
const mongooseValidationError = mongoose.Error.ValidationError;
const isProduction = process.env.NODE_ENV === "production";
import appResponse from "../../lib/appResponse"
import { AppError } from "../../lib/appError";

const errorNames = [
	"CastError",
	"JsonWebTokenError",
	"ValidationError",
	"SyntaxError",
	"MongooseError",
	"MongoError",
];

const ErrorMiddleware = function (error: AppError, req: express.Request, res: express.Response, next: express.NextFunction) {
	if (error.name === "AppError" || error.isOperational) {
		return res
			.status(error.statusCode)
			.send(appResponse(error.message, null, false));
	}

	if (error instanceof mongooseValidationError) {
		const errorMessages = Object.values(error.errors).map((e) => e.message);
		return res
			.status(400)
			.send(
				appResponse(
					"validation error occurred check your inputs for corrections",
					errorMessages,
					false
				)
			);
	}

	if (error.hasOwnProperty("name") && error.name === "MongoError") {
		const data =  null;
		return res
			.status(400)
			.send(appResponse("the entry already exist", data, false));
	}

	if (errorNames.includes(error.name)) {
		return res.status(400).send(appResponse(error.message, null, false));
	}

	// log error
	console.error(error);

	const message = isProduction
		? "An unexpected error has occured. Please, contact the administrator"
		: error.message;

	return res.status(500).send(appResponse(message, null, false));
};

export {ErrorMiddleware}
