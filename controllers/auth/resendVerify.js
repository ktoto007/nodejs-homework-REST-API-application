const { User } = require("../../models/user");
const { emailValidateTransport } = require("../../helpers");

const resendVerify = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(400, "missing required field email");
  }
  if (user.verify) {
    throw HttpError(400, "Verification has already been passed");
  }

  const verifyEmail = {
    from: "p13x1182@meta.ua",
    to: email,
    subject: "Verify email",
    text: "Hello world?",
    html: `<a target="_blank" href="http://localhost:3001/api/auth/verify/${user.verificationToken}">click to verify</a>`,
  };
  await emailValidateTransport(verifyEmail);

  res.json({ message: "Verification email sent" });
};

module.exports = resendVerify;
