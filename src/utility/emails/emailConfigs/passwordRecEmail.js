const fs = require('fs')
const path = require('path')
const CustomError = require('../../CustomError')
const {recovery} = require('../emailParams')
const { sendEmail } = require('../emailActions')
const { EMAIL_USERNAME, FRONTENT_URL } = require('../../../config/constants')


const recoverPasswordEmail =async (data) => {
    let emailBodySettings = null


    // Read the file and throw error if there is an error
    try {

        let file = fs.readFileSync(path.join(__dirname, '../emailTemplates/account_reset_notification.html'), "utf8")
        
       // loop through the recovery object for all that is needed to be replaced
        // Then replace with the incoming data

        for(let key in recovery){
            let toReplace =  new RegExp(recovery[key], "g")
            if(key == "encrypted_user_id"){
                file =file.replace(toReplace, encodeURIComponent(data[key]))
            }else{
                file = file.replace(toReplace, data[key])
            }
        }

        emailBodySettings = {
            "receiver_email": data.email,
            "email_subject": "Account Recovery",
            "email_body": file,
            "sender_email": EMAIL_USERNAME,
            "site_url": FRONTENT_URL
        };

        await sendEmail(emailBodySettings)

    } catch (err) {
        throw new CustomError("There was an error sending verificaiton email", 400)
    }


}

exports.recoverPasswordEmail =  recoverPasswordEmail