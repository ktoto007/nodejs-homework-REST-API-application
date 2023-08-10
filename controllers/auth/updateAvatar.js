const path = require("path");
const fs = require("fs/promises");
const { User } = require("../../models/user");
const Jimp = require("jimp");

const avatarsDir = path.join(__dirname, "../", "../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  console.log(tempUpload);
  try {
    const avatar = await Jimp.read(tempUpload);
    avatar.resize(250, 200);
    avatar.write(tempUpload);
  } catch (err) {
    console.error(err);
  }

  const filename = `${_id}${originalname}`;
  const resultUpload = path.join(avatarsDir, filename);

  await fs.rename(tempUpload, resultUpload);

  const avatarURL = path.join("avatars", filename);

  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({ avatarURL });
};

module.exports = updateAvatar;
