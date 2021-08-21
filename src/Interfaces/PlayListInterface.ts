import {Document, PopulatedDoc} from 'mongoose'
import {IMusic} from './MusicInterfaces'
/**
 * All the interface that entails of playlist are all here
 */


interface PlayList{
    name: string, 
    information: string, 
    music: PopulatedDoc<IMusic & Document>[],
}


export {
    PlayList
}