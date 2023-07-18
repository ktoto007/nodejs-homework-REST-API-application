const { Contact } = require("../../models/contact");
const { HttpError } = require("../../helpers");

const delById = async (req, res, next) => {
  const id = req.params["contactId"];
  const contact = await Contact.findByIdAndRemove(id);
  if (!contact) {
    throw HttpError(404, "Not Found");
  }
  res.json({
    message: "contact deleted",
  });
};

module.exports = delById;
