import {Document, PopulatedDoc} from 'mongoose'
import {AUser} from "./UserInterfaces"
/**
 * All the interface that entails of music are all here
 */

interface IMusic{
    name: string, 
    artist: PopulatedDoc<AUser & Document>, 
    likes: PopulatedDoc<AUser & Document>[],
    audioLink:CloudinaryLink
    imageLink: CloudinaryLink,
    category: string
}

interface CloudinaryLink{
    public_id: string, 
    secure_url: string
}


export {
    IMusic, 
    CloudinaryLink
}




