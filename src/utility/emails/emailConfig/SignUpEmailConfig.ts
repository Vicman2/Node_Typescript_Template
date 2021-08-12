import emailSender from ".."
import signUpEmailTemp from "../emailTemplates/SignUpEmail"
import constants from "../../../config/constants"
import { SignUpEmailData } from "../../../Interfaces/EmailInterface"

const sendSignUpEmail= async (data: SignUpEmailData) => {
    const signUpEmailData = {
        fromEmail: constants.COMPANY_EMAIL.HELP, 
        toEmails: data.email,
        subject: "WElcome To VicTech Streaming App", 
        html: signUpEmailTemp({name: data.name})
    }

    await emailSender(signUpEmailData)

}


export default sendSignUpEmail