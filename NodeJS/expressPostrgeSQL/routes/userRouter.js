const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/", userController.logUsernames);
router.get("/new", userController.displayForm);
router.post("/new", userController.saveUsername);
router.get("/delete", userController.deleteUsers);

module.exports = router;
