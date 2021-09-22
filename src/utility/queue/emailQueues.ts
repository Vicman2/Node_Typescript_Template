import Queue, {Job} from "bull"
import constants from "../../config/constants";
import { SignUpEmailData } from "../../Interfaces/EmailInterface";
import sendSignUpEmail from "../emails/emailConfig/SignUpEmailConfig";

const SignUpEmailQueue = new Queue("Email_Queue", {redis: {
    host: constants.REDIS_CONFIGURATION.REDIS_HOST, 
    port: constants.REDIS_CONFIGURATION.REDIS_PORT, 
    password: constants.REDIS_CONFIGURATION.REDIS_PASSWORD, 
}});


SignUpEmailQueue.process(async (job: Job<SignUpEmailData>)=> {
    const result = await sendSignUpEmail(job.data)
    return result
})


export{
    SignUpEmailQueue
}
