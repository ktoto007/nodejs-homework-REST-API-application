const { Contact } = require("../../models/contact");
const { HttpError } = require("../../helpers");

const updateFavorite = async (req, res, next) => {
  const data = req.body;
  if (data.favorite === undefined) {
    throw HttpError(400, "missing field favorite");
  }
  const id = req.params["contactId"];
  const contact = await Contact.findByIdAndUpdate(id, data, { new: true });
  if (!contact) {
    throw HttpError(404, "Not Found");
  }
  res.json({
    contact,
  });
};

module.exports = updateFavorite;
