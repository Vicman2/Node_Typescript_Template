
import {PlayList} from './PlaylistInterface'
import {PopulatedDoc, Document} from "mongoose"
interface AUser extends Document{
    email: string, 
    firstname: string, 
    lastname: string,
    password: string, 
    fullname: string, 
    role: string,
    isArtist:boolean, 
    playlist: PopulatedDoc<PlayList & Document>[], 
    about: string, 
    followers: PopulatedDoc<string & Document>[], 
    following: PopulatedDoc<string & Document>[]
    _doc: any
}

interface UserLogin{
    email: string, 
    password: string
}

interface GetUser{
    email?: string, 
    id: string, 
}

// This is the type of data that will be encrypted in JWT



interface AuthUser{
    id: string, 
    email:string,
    role: string
}

interface ArtistData{
    id: string,
    about: string
}


export {
    AUser, 
    UserLogin, 
    GetUser, 
    AuthUser, 
    ArtistData
}