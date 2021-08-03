import express from 'express'
import multer from "multer";
import fs from "fs"
import  path from 'path'
import { BadRequestError} from "./appError"

//adjust how files are stored
const storage = multer.diskStorage({
	destination: function (req: express.Request, file: any, cb) {
		let dir = process.cwd();
		//Sets destination for fileType
		if (
			path.extname(file.originalname) === ".jpeg" ||
			path.extname(file.originalname) === ".png" ||
			path.extname(file.originalname) === ".jpg"
		) {
			dir = dir + `/uploads/images`;
		} else {
			dir = dir + `/uploads/pdfs`;
		}

		fs.mkdir(dir, { recursive: true }, (err) => cb(err, dir));
	},
	filename: function (req: express.Request, file, callback) {
		callback(null, Date.now() + "_" + file.originalname);
	},
});

const fileFilter = function (req: express.Request, file: any, callback: any) {
	const allowedFileTypes = ["image/jpeg", "image/png", "application/pdf", "application/msword",
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

	const checkFilesExist = allowedFileTypes.includes(file.mimetype);
	const fileExtCheck = path.extname(file.originalname) === ".jpeg" ||
	path.extname(file.originalname) === ".png" ||
	path.extname(file.originalname) === ".jpg" || path.extname(file.originalname) === ".pdf" || 
	path.extname(file.originalname) === ".docs" || path.extname(file.originalname) === ".docs"
	
	if (checkFilesExist || fileExtCheck) {
		callback(null, true);
	} else {
		callback(
			new BadRequestError(
				"Image upload failed. Supports only jpeg, png, doc and pdf files"
			),
			false
		);
	}
};

const fileSize = function (): number {
	const size = 1024 * 1024 * 250;
	return size
};

exports.upload = multer({
	storage: storage,
	limits: {
		fileSize: fileSize(),
	},
	fileFilter: fileFilter,
});
