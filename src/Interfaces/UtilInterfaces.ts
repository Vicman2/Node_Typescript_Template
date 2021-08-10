import express from 'express'
import { JwtPayload } from 'jsonwebtoken';
import { AuthUser } from './UserInterfaces';


interface AuthRequest extends express.Request{
    user?: JwtPayload & AuthUser;
}


export{
    AuthRequest
}