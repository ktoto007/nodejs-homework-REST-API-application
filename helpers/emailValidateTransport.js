const nodemailer = require("nodemailer");
require("dotenv").config();

const { Meta_Password } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "p13x1182@meta.ua",
    pass: Meta_Password,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const emailValidateTransport = async (verifyEmail) => {
  try {
    await transport.sendMail(verifyEmail);
    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = emailValidateTransport;
