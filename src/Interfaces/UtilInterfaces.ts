import express from 'express'
import { JwtPayload } from 'jsonwebtoken';


interface AuthRequest extends express.Request{
    user?: JwtPayload;
}


export{
    AuthRequest
}