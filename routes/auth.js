const express = require("express");
const { registerController,signInController } = require("../controllers/auth")
const {authValidation} = require("../validation/auth-body-validation")
const {validateBody} =require("../middlewares/validateBody")
const router = express.Router();

router.post("/sign-up",validateBody(authValidation), registerController);
router.post("/sign-in", validateBody(authValidation), signInController);

module.exports = router;