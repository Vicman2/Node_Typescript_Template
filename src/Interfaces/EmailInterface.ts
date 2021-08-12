

interface EmailData{
    fromEmail: string, 
    toEmails: string| string[], 
    subject: string, 
    html: string
}


// Template data interface
interface SignUpEmailDataTemp{
    name: string
}

// config data interface

interface SignUpEmailData{
    email: string, 
    name: string
}

export{
    EmailData, 
    SignUpEmailDataTemp, 
    SignUpEmailData
}