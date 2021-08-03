import jwt from 'jsonwebtoken'
import { constants } from '../config/constants'
/**
 * 
 * @param dataToEncrypt This is the data that will encryped
 * @param expirationTime The expiration time in hrs
 */

const encryptData = function (dataToEncrypt: object, expirationTime:number){
    let timeToMillSec = expirationTime * 60 * 60
    const encryptedData = jwt
        .sign(dataToEncrypt, constants.JWT_PUBLIC_KEY!, {
           expiresIn: timeToMillSec
        })

    return encryptedData

}

const decryptData = function(tokenToDecrypt: string){
    const decryptedData = jwt
        .verify(tokenToDecrypt, constants.JWT_PUBLIC_KEY!)
    return decryptedData
}

const passwordHash = async function(stringToHash: string){
    // const hashedPassword = await 
}


export {
    encryptData, 
    decryptData
}