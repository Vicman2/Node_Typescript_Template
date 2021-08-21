import { Schema, model, Model} from "mongoose";
import { PlayList } from "../Interfaces/PlaylistInterface";


const PlaylistSchema  = new Schema<PlayList>({
    name: {
        type: String, 
        unique: true,
        lowercase:true,
        required: true
    }, 
    information: {
        type: String, 
        default: "",
    },
    music: [{
        type: Schema.Types.ObjectId,
        default: "", 
        ref: "Music"
    }]
})

const PlaylistModel:Model<PlayList>  = model("Playlist", PlaylistSchema)

export default PlaylistModel