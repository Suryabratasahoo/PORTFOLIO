
const express = require("express");
const app = express();
require('dotenv').config();
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"/public")));
const EMAIL='suryabratasahoo882@gmail.com';
const PASSWORD='mgpf obby sxur fxyj';
const nodemailer = require('nodemailer')


let config = {
    service:'gmail',
    auth:{
        user:EMAIL,
        pass:process.env.PASSWORD
    }
}

let transporter = nodemailer.createTransport(config);

app.get("/",(req,res)=>{
    res.render('index.ejs')
})
app.post('/sendMessage',async(req,res)=>{
    const {name,email,message}=req.body;
    
    try {

        // Prepare email body
        const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
        const mailOptions = {
            from: EMAIL,
            to: ['suryabrata.23bce7839@vitapstudent.ac.in'],
            subject: 'portfolio test',
            text: body,
        };

        // Send the email
        await transporter.sendMail(mailOptions);
        return res.send('sent');

    } catch (error) {
        console.error('Error sending email:', error);
        return res.send('failed');
    }
})
app.listen(3000,()=>{
    console.log("app is listening to port 3000")
})