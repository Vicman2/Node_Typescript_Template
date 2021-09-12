const  constants = {
    PORT : process.env.PORT, 
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
    },

    // Compny Emails
    COMPANY_EMAIL: {
        HELP: "vicmanthebest@gmail.com" // Just for demo
    }, 

    //Redis Configuration
    REDIS_CONFIGURATION  : {
        REDIS_PORT: Number(process.env.REDIS_PORT),
        REDIS_HOST: process.env.REDIS_HOST,
        REDIS_URL: process.env.REDIS_URL, 
        REDIS_TLS_URL: process.env.REDIS_TLS_URL, 
        REDIS_PASSWORD: process.env.REDIS_PASSWORD
    }
}


export default constants