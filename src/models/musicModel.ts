import { Schema, model, Model} from "mongoose";
import { IMusic, CloudinaryLink } from "../Interfaces/MusicInterfaces";


const MusicSchema  = new Schema<IMusic>({
    name: {
        type: String, 
        unique: true,
        lowercase:true,
        required: true
    }, 
    artist: {
        type: String, 
        required: true
    }, 
    audioLink: {
        public_id:{
            type: String, 
            required: true
        },  
        secure_url:{
            type: String, 
            required: true
        }
    }, 
    imageLink: {
        public_id:{
            type: String, 
            required: true
        },  
        secure_url:{
            type: String, 
            required: true
        }
    },
    category: {
        type: String, 
        required: true
    }
})

const UserModel:Model<IMusic>  = model("Music", MusicSchema)

export default UserModel