import { SignUpEmailDataTemp } from "../../../Interfaces/EmailInterface"


const signUpEmailTemp =(signUpDataTemp: SignUpEmailDataTemp) => `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Movie Streaming Application</title>
    </head>
    <body>
        <h1> Hi ${signUpDataTemp.name.toUpperCase()}, </h1>
        <p>You are welcome to Vicman streaning application</p>
        <p>Have fun and relax. </p>
    </body>
    </html>`


export default signUpEmailTemp