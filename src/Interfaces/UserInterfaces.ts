interface AUser extends Document{
    email: string, 
    firstname: string, 
    lastname: string,
    password: string, 
    fullname: string, 
    _doc: any
}

interface UserLogin{
    email: string, 
    password: string
}

interface GetUser{
    email?: string, 
    id: string, 
}


export {
    AUser, 
    UserLogin, 
    GetUser
}