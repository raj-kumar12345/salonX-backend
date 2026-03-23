const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.Nodemailer_Gmail,
        pass: process.env.Nodemailer_Gmail_Secret_key
    }
})

const sendEmailForForgetPassword = async (to,subject,html) =>{

    const options = {
        from: process.env.Nodemailer_Gmail,
        to,
        subject,
        html
    };
    return await transporter.sendMail(options);
}




const sendEmailForVerification = async (to,otp) =>{
    
    const options = {
        from: process.env.Nodemailer_Gmail,
        to,
        subject: "Email Verification OTP Code",
        html: `<h1>Your OTP is ${otp}</h1><p>It will expire in 5 minutes.</p>`
    };
    return await transporter.sendMail(options);
}

module.exports = { sendEmailForVerification , sendEmailForForgetPassword }