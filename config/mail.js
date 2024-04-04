// mail configuration
const nodemailer = require('nodemailer')

// function 
const emailSender = async (to,subject,template) => {
    try {
        // email transporter configuration
        const transporter = await nodemailer.createTransport({
            service: process.env.MAIL_SERVICE,
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            auth: {
                user: process.env.MAIL_ID,
                pass: process.env.MAIL_PASS
            }
        })

        // send an email
     return  new Promise(async (resolve,reject) => {
           let info =  await transporter.sendMail({
                from: process.env.MAIL_ID,
                to,
                subject,
                html: `<div> ${template} </div>`
           })
            // success
           resolve({
                msg: "email sent successfully."
           })

           // failed 
           reject({
                msg: "Error Sending an email."
           })
        })


    } catch (err) {
        return err.message
    }
}

// export function
module.exports  = emailSender