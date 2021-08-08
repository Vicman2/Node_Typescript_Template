/**
 * All the interface that entails of music are all here
 */

interface IMusic{
    name: string, 
    artist: string, 
    audioLink:CloudinaryLink
    imageLink: CloudinaryLink,
    category: string
}

interface CloudinaryLink{
    public_id: string, 
    secure_url: string
}


export {
    IMusic, 
    CloudinaryLink
}




