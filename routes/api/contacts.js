const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/contacts");

const { validateBody, isValidId, autentificate } = require("../../middlewares");

const { schemas } = require("../../models/contact");

router.get("/", autentificate, ctrl.getAll);

router.get("/:contactId", autentificate, isValidId, ctrl.getById);

router.post("/", autentificate, validateBody(schemas.schema), ctrl.add);

router.delete("/:contactId", autentificate, isValidId, ctrl.delById);

router.put(
  "/:contactId",
  autentificate,
  isValidId,
  validateBody(schemas.schema),
  ctrl.update
);

router.patch(
  "/:contactId/favorite",
  autentificate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateFavorite
);

module.exports = router;
