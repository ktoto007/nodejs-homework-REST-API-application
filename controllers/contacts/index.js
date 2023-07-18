const { ctrlWrapper } = require("../../helpers");
const getAll = require("./getAll");
const getById = require("./getById");
const add = require("./add");
const delById = require("./delById");
const update = require("./update");
const updateFavorite = require("./updateFavorite");

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  delById: ctrlWrapper(delById),
  update: ctrlWrapper(update),
  updateFavorite: ctrlWrapper(updateFavorite),
};
