const { Contact } = require("../../models/contact");
const { HttpError } = require("../../helpers");

const getById = async (req, res, next) => {
  const id = req.params["contactId"];
  const contact = await Contact.findById(id);
  if (!contact) {
    throw HttpError(404, "Not Found");
  }
  res.json({
    contact,
  });
};

module.exports = getById;
