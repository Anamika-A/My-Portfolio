const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config();
const bodyParser = require('body-parser');

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
//app.use("/", router);
app.listen(5000, () => console.log("Server Running"));
console.log(process.env.EMAIL_ADDRESS);
console.log(process.env.EMAIL_PASS);

app.get('/',(req,res)=>{
  res.send("Sending response for GET REQ");
})
/*const contactEmail = nodemailer.createTransport({
  service: 'gmail',

  port :465,
  secure :true,
  logger: true,
  debug :true,
  secureConnection :false,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD
  },

  tls :{
    rejectUnauthorized :true
  }
});
   //Verify to check if email and password has been configured correctrly
contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: process.env.EMAIL_ADDRESS,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});

*/
