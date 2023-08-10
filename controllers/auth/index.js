const { ctrlWrapper } = require("../../helpers");
const register = require("./register");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateSub = require("./updateSub");
<<<<<<< HEAD

=======
const updateAvatar = require("./updateAvatar");
const verify = require("./verify");
const resendVerify = require("./resendVerify");
>>>>>>> c4d81f9 (done all base dz6)
module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
  updateSub: ctrlWrapper(updateSub),
<<<<<<< HEAD
=======
  updateAvatar: ctrlWrapper(updateAvatar),
  verify: ctrlWrapper(verify),
  resendVerify: ctrlWrapper(resendVerify),
>>>>>>> c4d81f9 (done all base dz6)
};
