import { NotFoundError } from '../../lib/appError';
import { GetUser, UserLogin } from '../Interfaces/UserInterfaces';
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
            _id: newUser._id, 
            email: newUser.email
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
            _id: existingUser._id, 
            email: existingUser.email
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

    async getUser(userData: GetUser){
        const user = await UserModel.findById(userData.id)
        return user
    }

}

export default new UserServices()