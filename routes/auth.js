const express = require("express");
const { registerController,signInController } = require("../controllers/auth")
const router = express.Router();
const {authValidation} = require("../validation/auth-body-validation")
const {validateBody} =require("../middlewares/validateBody")

router.post("/sign-up",validateBody(authValidation), registerController);
router.post("/sig-in", validateBody(authValidation), signInController);

module.exports = router;