const  constants = {
    PORT : 6000, 
    DATABASE_URI: process.env.DATABASE_URI , 
    JWT_PUBLIC_KEY: process.env.JWT_PUBLIC_KEY , 
    JWT_USER_LOGIN_EXPIRATION: 2, 
    // Cloudinary

    CLOUDINARY: {
        NAME: process.env.CLOUDINARY_NAME, 
        API_KEY: process.env.CLOUDINARY_API_KEY, 
        SECRET_KEY: process.env.CLOUDINARY_SECRET_KEY
    }, 
    //User roles 

    ROLE: {
        ADMIN: "admin", 
        USER: "user"
    }
}


export default constants