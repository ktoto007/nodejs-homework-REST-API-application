const express = require("express");

const router = express.Router();

const { validateBody, autentificate, upload } = require("../../middlewares");
const { schemas } = require("../../models/user");
const ctrl = require("../../controllers/auth");

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.get("/verify/:verificationToken", ctrl.verify);

router.post("/verify", validateBody(schemas.emailSchema), ctrl.resendVerify);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", autentificate, ctrl.getCurrent);

router.post("/logout", autentificate, ctrl.logout);

router.patch(
  "/:id/subscription",
  autentificate,
  validateBody(schemas.updatedSub),
  ctrl.updateSub
);

router.patch(
  "/avatars",
  autentificate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
