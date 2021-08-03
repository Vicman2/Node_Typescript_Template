import express from 'express'
// import  util from '../utility/utilize'
const CustomError = require('../utility/CustomError')



exports.authentication =async(req: express.Request, res: express.Response, next: express.NextFunction)=>{
    const token = req.headers["x-access-token"];
    if(!token) throw new CustomError("Please, provide us with a token", 401);
    // const decodedToken = await util.decodeToken(token)
    // (req as any) = decodedToken
    next()
}

// exports.authorize = async (req: express.Request, res: express.Response, next: express.NextFunction)=> {
//     const role = req.user.role;
//     if(role !== "admin") throw new CustomError("You are not an admin", 403);
//     next()
// }