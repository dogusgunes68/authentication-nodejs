const express = require("express");
const { registerController,signInController, getPostController } = require("../controllers/auth")
const {authValidation} = require("../validation/auth-body-validation")
const {validateBody} =require("../middlewares/validateBody");
const { requireAdmin } = require("../middlewares/requireAdmin");
const router = express.Router();

router.post("/sign-up",validateBody(authValidation), registerController);
router.post("/sign-in", validateBody(authValidation), signInController);

router.get("/post/:id",requireAdmin, getPostController);

module.exports = router;