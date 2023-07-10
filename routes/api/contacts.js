const express = require("express");
const Joi = require("joi");
const metods = require("../../models/contacts");
const router = express.Router();

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

const { HttpError } = require("../../helpers");

router.get("/", async (req, res, next) => {
  try {
    const contacts = await metods.listContacts();
    res.json({
      contacts,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:contactId", async (req, res, next) => {
  try {
    const id = req.params["contactId"];
    const contact = await metods.getContactById(id);
    if (!contact) {
      throw HttpError(404, "Not Found");
    }
    res.json({
      contact,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    const { error } = schema.validate(data);
    if (error) {
      throw HttpError(400, error.message);
    }
    const contact = await metods.addContact(data);
    res.status(201).json({
      contact,
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:contactId", async (req, res, next) => {
  try {
    const id = req.params["contactId"];
    const contact = await metods.removeContact(id);
    if (!contact) {
      throw HttpError(404, "Not Found");
    }
    res.json({
      message: "contact deleted",
    });
  } catch (error) {
    next(error);
  }
});

router.put("/:contactId", async (req, res, next) => {
  try {
    const data = req.body;
    const { error } = schema.validate(data);
    if (error) {
      throw HttpError(400, error.message);
    }
    const id = req.params["contactId"];
    const contact = await metods.updateContact(id, data);
    if (!contact) {
      throw HttpError(404, "Not Found");
    }
    res.json({
      contact,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
