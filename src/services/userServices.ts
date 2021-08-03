import UserModel from '../models/userModel'

class UserServices{
    async addUser(userData: any){
        const newUser = await UserModel.create(userData)
        return newUser
    }
    async getUsers(){
        const users = await UserModel.find();
        return users
    }
}

export default new UserServices()