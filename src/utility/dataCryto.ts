import jwt from 'jsonwebtoken'
import constants from '../config/constants'
import bcrypt from 'bcrypt'

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

/**
 * 
 * @param tokenToDecrypt The token string to decrypt 
 * @returns 
 */

const decryptData = function(tokenToDecrypt: string){
    const decryptedData = jwt
        .verify(tokenToDecrypt, constants.JWT_PUBLIC_KEY!)
    return decryptedData
}

/**
 * 
 * @param stringToHash The string that is to be hashed
 * @returns The hashed string
 */


const hashString = async function(stringToHash: string){
    const hashedString = await bcrypt.hash(stringToHash, 12)
    return hashedString
}

/**
 * 
 * @param hashedString The string hashed string for comaprison
 * @param rawString The raw string for comparison
 * @returns boolean 
 */

const compareHashing = async function(hashedString: string, rawString: string){
    const isMathed = await bcrypt.compare(rawString, hashedString)
    return isMathed
}


export {
    encryptData, 
    decryptData, 
    hashString, 
    compareHashing
}