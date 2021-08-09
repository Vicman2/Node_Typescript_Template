import { Schema, model, Model} from "mongoose";
import { AUser } from "../Interfaces/UserInterfaces";
import { encryptData, hashString } from "../utility/dataCryto";


const UserSchema  = new Schema<AUser>({
    email: {
        type: String, 
        unique: true,
        required: true
    }, 
    firstname: {
        type: String, 
        required: true
    }, 
    lastname: {
        type: String, 
        required: true
    }, 
    password: {
        type: String, 
        required: true
    }, 
    isArtist: {
        type: Boolean, 
        default: false
    }, 
    about: {
        type:String
    }
})


UserSchema.methods.generateToken = async function(){
    const user = this
    const dataToEncrypt = {
        _id : user._id,
        email: user.email
    }

    const generatedToken = encryptData(dataToEncrypt, 2)

    return generatedToken
    
}

UserSchema.pre("save", async function(next){
    const user = this
    if(user.isModified("password") || user.isNew){
        const hashedString = await hashString(user.password)
        user.password = hashedString
    }
    next()
})

const UserModel:Model<AUser>  = model("User", UserSchema)

export default UserModel