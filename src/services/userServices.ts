import { NotFoundError, UnAuthorizedError } from '../../lib/appError';
import { ArtistData, GetUser, UserLogin } from '../Interfaces/UserInterfaces';
import UserModel from '../models/userModel'
import { encryptData } from '../utility/dataCryto';
import constants from '../config/constants';




class UserServices{
    async addUser(userData: any){

        // Check if the user exists 
        const existingUser = await UserModel
            .findOne({email: userData.email})

        // Throw error if there is any
        if(existingUser) throw new NotFoundError("User already exist")

        // Create a new user since there are now no duplicate
        const newUser = await UserModel.create(userData)
        let dataToEncrypt = {
            id: newUser._id, 
            email: newUser.email,
            role: newUser.role
        }

        const token = encryptData(dataToEncrypt, 2)
        const dataToSend = {
            ...newUser._doc,
            token
        }
        delete dataToSend.password

        return dataToSend
    }

    async login(loginDetails: UserLogin){
        // Check if the user exists 
        const existingUser = await UserModel
            .findOne({email: loginDetails.email})
        if(!existingUser) throw new NotFoundError("User not found")

        let dataToEncrypt = {
            id: existingUser._id, 
            email: existingUser.email,
            role: existingUser.role
        }

        const token = encryptData(dataToEncrypt, constants.JWT_USER_LOGIN_EXPIRATION)
        const dataToSend = {
            ...existingUser._doc,
            token
        }

        delete dataToSend.password

        return dataToSend
        
    }
    async getUsers(){
        const users = await UserModel.find();
        return users
    }

    async getUser(userData:any, data: any){
        // Authenticate the person making the request
        const user = await UserModel.findById(userData.id)
        if(!user) throw new UnAuthorizedError("User does not exist")

        // Fetch the user which the request was all about
        const userToFetch = await UserModel.findById(data.id)
        if(!userToFetch) throw new UnAuthorizedError("User not found")

        return userToFetch
    }

    async makeArtist(userData:any, artistData: ArtistData){
        // Authenticate the person making the request
        const user = await UserModel.findById(userData.id)
        if(!user) throw new UnAuthorizedError("User does not exist")


        const theArtist = await UserModel.findById(artistData.id)
        if(!theArtist) throw new NotFoundError("User to be made artist not found")

        // Make ther person an artist
        theArtist.isArtist = true
        theArtist.about = artistData.about

        // Update the document and return
        const updatedDocument = await UserModel
            .findByIdAndUpdate(artistData.id, theArtist, {new: true})

        return updatedDocument
    }

}

export default new UserServices()