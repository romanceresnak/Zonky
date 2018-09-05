const nodemailer = require("nodemailer");
require("dotenv").config();
const { welcomeTemplate } = require("./welcome_template");
const { purchase } = require("./purchase_template");
const { resetPassword } = require("./resetPassword_template");
const getEmailData = (to, name, token, type, transactionData) => {
  let data = null;

  switch (type) {
    case "welcome":
      data = {
        from: "Eshop <eshoptestproduct@gmail.com>",
        to,
        subject: `Welcome on board ${to}`,
        html: welcomeTemplate()
      };
      break;
    case "purchase":
      data = {
        from: "Eshop <eshoptestproduct@gmail.com>",
        to,
        subject: `Thank you for buying products in our eshop. ${to}`,
        html: purchase(transactionData)
      };
      break;
    case "reset_password":
      data = {
        from: "Eshop <eshoptestproduct@gmail.com>",
        to,
        subject: `We receive mail for reset your password. ${name}`,
        html: resetPassword(transactionData)
      };
      break;
    default:
      return data;
  }

  return data;
};
const sendEmail = (to, name, token, type, transactionData = null) => {
  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "eshoptestproduct@gmail.com",
      pass: process.env.EMAIL_PASS
    }
  });

  const mail = getEmailData(to, name, token, type, transactionData);

  smtpTransport.sendMail(mail, function(err, response) {
    if (err) {
      console.log(err);
    } else {
      console.log("email sent");
    }
    smtpTransport.close();
  });
};

module.exports = { sendEmail };
