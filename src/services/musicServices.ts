import * as path from 'path'
import { BadRequestError, DuplicateError, NotFoundError } from "../../lib/appError"
import { uploadAudioToCloud, uploadToCloud } from "../../lib/cloudinary"
import musicModel from "../models/musicModel"

class Music{



    async addMusic(musicData: any){

        // Check the file type and throw error if the expecting type are not there
        const imageFormats = [".jpg", "png", ".jpeg"]
        const audioFormats = [".mp3"];

        const imageFile = musicData.files
            .find((file: any) => imageFormats.includes(path.extname(file.originalname)))
        if(!imageFile)
            throw new BadRequestError("Please, add an image file to the request")

        const audioFile = musicData.files   
            .find((file: any) => audioFormats.includes(path.extname(file.originalname)))
        if(!audioFile) 
            throw new BadRequestError("Please, add an image file to the request")

        // Check if music exist

        const exisitingMusic = await musicModel
            .findOne({name: musicData.name.toLowerCase()})
        if(exisitingMusic) throw new BadRequestError("Music already exist")

        // Upload to cloudinary
        const cloudinaryImage = await uploadToCloud(imageFile.path)
        const cloudinaryMusic = await uploadAudioToCloud(audioFile.path)
       

        const dataToSave = {
            name: musicData.name, 
            artist: musicData.artist, 
            audioLink: {
                secure_url: cloudinaryMusic.secure_url, 
                public_id: cloudinaryMusic.public_id
            } , 
            imageLink: {
                secure_url: cloudinaryImage.secure_url, 
                public_id: cloudinaryImage.public_id
            },
            category: musicData.category
        }

        const newMusic = await musicModel.create(dataToSave)

        return newMusic

    }
}


export default new Music()