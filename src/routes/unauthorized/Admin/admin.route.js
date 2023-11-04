const express = require("express");
const router = express.Router();
const AdminController = require("../../../controllers/Admin/admin.controller")


router.post("/login", AdminController.login);

router.get("/get-all-users", AdminController.getAllUsers);




module.exports = router;