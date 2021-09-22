import nodemailer from "nodemailer"
import contants from "../../config/constants";
import { EmailData } from "../../Interfaces/EmailInterface";

async function emailSender(emailData: EmailData) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: contants.EMAIL_CONFIGURATION.EMAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: contants.EMAIL_CONFIGURATION.EMAIL_USERNAME, // generated ethereal user
      pass: contants.EMAIL_CONFIGURATION.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: emailData.fromEmail, // Sender address
    to: emailData.toEmails, // list of receivers
    subject: emailData.subject, // Subject line
    html: emailData.html // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}


export default emailSender
