import * as path from "path"
import { BadRequestError } from "../../lib/appError";


/**
 * 
 * @param musicFiles This is the request files if any
 * @param state This is the state of the operation which could be add or edit
 * @returns 
 */

function checkMusicFilesForUpload(musicFiles: any, state: string ="add"){
    // Check the file type and throw error if the expecting type are not there
    const imageFormats = [".jpg", "png", ".jpeg"];
    const audioFormats = [".mp3"];

    const imageFile = musicFiles
        .find((file: any) => imageFormats.includes(path.extname(file.originalname)))
    if(!imageFile && state == "add")
        throw new BadRequestError("Please, add an image file to the request")

    const audioFile = musicFiles   
        .find((file: any) => audioFormats.includes(path.extname(file.originalname)))
    if(!audioFile && state == "add")
        throw new BadRequestError("Please, add an image file to the request")
    

    return {
        audioFile, 
        imageFile
    }
    
}


export {
    checkMusicFilesForUpload
}