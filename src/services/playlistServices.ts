import  mongoose from "mongoose";
import { BadRequestError, UnAuthorizedError } from "../../lib/appError";
import { PlayList } from "../Interfaces/PlaylistInterface";
import { AuthUser } from "../Interfaces/UserInterfaces";
import musicModel from "../models/musicModel";
import playlistModel from "../models/playlistModel";
import userModel from "../models/userModel";



class Playlist{
    async addPlaylist(userData: AuthUser, playlistData: PlayList){
        // Check if the user exists
        const user = await userModel
            .findById(userData.id)
            .populate("playlist")
        if(!user) throw new UnAuthorizedError("User do not exist")

        // Check if there is a playlist of such name for the user
        const exisitingPlaylist  = [...user.playlist]
            .find((singleList: PlayList) => singleList.name === playlistData.name)
        if(exisitingPlaylist) 
            throw new BadRequestError("Playlist alreadt exist")

        
        // Transform the musicList ids sent to objectId
        const transformedId = playlistData.music
            .map((id: string) => mongoose.Types.ObjectId(id))


        // Check if one of the music sent do not exist
        const nonExisitingMusic = await musicModel
            .findOne({
                _id: {$nin:transformedId}
            })
        if(nonExisitingMusic) 
            throw new BadRequestError("One or more of the music sent in the playlist do not exist")
        
         // Create a new playlist

        let paylistDataToSave = {
            name: playlistData.name, 
            information: playlistData.information, 
            music: playlistData.music
        }

        return await playlistModel.create(paylistDataToSave) 
        
    }

    // async getPlaylist(userData){}

    // async editPlaylist(userData, playlistId){}

    // async deletePlaylist(userData, playlistId){}
}


export default new Playlist()