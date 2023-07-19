const { Contact } = require("../../models/contact");

const getAll = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10, favorite = null } = req.query;
  const skip = (page - 1) * limit;
  let contacts;
  if (!favorite) {
    contacts = await Contact.find({ owner }, "-createdAt -updatedAt", {
      skip,
      limit,
    });
  } else {
    contacts = await Contact.find(
      { owner, favorite },
      "-createdAt -updatedAt",
      {
        skip,
        limit,
      }
    );
  }

  res.json({
    contacts,
  });
};

module.exports = getAll;
