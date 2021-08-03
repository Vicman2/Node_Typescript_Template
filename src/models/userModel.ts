import { Schema, model, Model, Document } from "mongoose";
import { encryptData } from "../utility/dataCryto";
interface AUser extends Document{
    email: string, 
    firstname: string, 
    lastname: string,
    password: string, 
    fullname: string
}


const UserSchema  = new Schema<AUser>({
    email: {
        type: String, 
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
    }
})

UserSchema.virtual("fullname").get(function(this: AUser){
    return `${this.firstname} ${this.lastname}`
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

// UserSchema.pre("save", async function(next){
//     const user = this
//     if(user.isModified("password") || user.isNew){

//     }
// })

const UserModel:Model<AUser>  = model("User", UserSchema)

export default UserModel