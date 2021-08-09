import express from 'express'
import { BadRequestError, UnAuthorizedError } from '../../lib/appError';
import { decryptData } from '../utility/dataCryto';
// import  util from '../utility/utilize'



const authentication =async(req: any, res: express.Response, next: express.NextFunction)=>{
    const token = req.headers["x-access-token"];
    if(!token) throw new UnAuthorizedError("Please, provide us with a token", 401);
    const decodedToken = await decryptData(token)
    req.user = decodedToken
    
    next()
}

const authorize = async (req: any, res: express.Response, next: express.NextFunction)=> {
    const role = req.user.role;
    if(role !== "admin") throw new UnAuthorizedError("You are not an admin", 403);
    next()
}

export {
    authentication, 
    authorize
}