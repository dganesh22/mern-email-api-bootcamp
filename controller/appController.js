// import email sender
const emailSender = require('../config/mail')
const email_template = require('../template/email-template')

// controller functions

const home = async (req,res) => {
    try {
        // to read incoming request data
        let { to, subject, content } = req.body

        // template
        let template = email_template(to,content)

        // send an email
        let emailRes = await emailSender(to,subject,template)

        res.status(200).json({ output: emailRes })
    } catch (err) {
        // internal server errors -> run time exceptions
        return res.status(505).json({ status: false, msg: err.message })
    }
}

// default export 
module.exports = home