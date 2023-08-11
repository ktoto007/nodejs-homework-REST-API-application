const bcrypt = require("bcrypt");
const { User } = require("../../models/user");

const { HttpError, emailValidateTransport } = require("../../helpers");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");


const register = async (req, res) => {
  const body = req.body;

  const { email, password } = body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email already in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);


  const newUser = await User.create({ ...body, password: hashPassword });

  const avatarURL = gravatar.url(email);
  const verificationToken = nanoid();


  const newUser = await User.create({
    ...body,
    password: hashPassword,
    avatarURL,


  const verifyEmail = {
    from: "p13x1182@meta.ua",
    to: email,
    subject: "Verify email",
    text: "Hello world?",
    html: `<a target="_blank" href="http://localhost:3001/api/auth/verify/${verificationToken}">click to verify</a>`,
  };

  await emailValidateTransport(verifyEmail);



  });

  res
    .status(201)
    .json({ email: newUser.email, subscription: newUser.subscription });
};

module.exports = register;
