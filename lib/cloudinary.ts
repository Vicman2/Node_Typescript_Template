import  cloudinary, { UploadApiErrorResponse, UploadApiResponse, UploadResponseCallback } from "cloudinary";
import constants from '../src/config/constants'



cloudinary.v2.config({
	cloud_name: constants.CLOUDINARY.NAME,
	api_key:constants.CLOUDINARY.API_KEY,
	api_secret: constants.CLOUDINARY.SECRET_KEY,
});

const uploadAudioToCloud = function (filename: string) {
	return new Promise<UploadApiResponse | UploadApiResponse>((resolve, reject) => {
		cloudinary.v2.uploader.upload(
			filename,
			{folder: "Streaming/Audio", resource_type: "video"},
			function (err?: UploadApiErrorResponse, result?: UploadApiResponse)  {
				if(err) reject(err)
				if(result) resolve(result)
			}
		);
	});
};

const uploadToCloud = function (filename: string) {
	return new Promise<UploadApiResponse | UploadApiResponse>((resolve, reject) => {
		cloudinary.v2.uploader.upload(
			filename,
			{folder: "Streaming/MusicPictures"},
			function (err?: UploadApiErrorResponse, result?: UploadApiResponse)  {
				if(err) reject(err)
				if(result) resolve(result)
			}
		);
	});
};



const deleteFromCloud = function (publicID: string) {
	return new Promise((resolve, reject) => {
		cloudinary.v2.uploader.destroy(publicID, function (result) {
			resolve(result);
		});
	});
};

const multipleUpload = async function (filenames: string[]) {
	try {
		const result = await Promise.all(filenames.map(uploadToCloud));
		return result;
	} catch (error) {
		throw error;
	}
};


export{
	uploadToCloud, 
	deleteFromCloud, 
	multipleUpload, 
	uploadAudioToCloud, 
}
