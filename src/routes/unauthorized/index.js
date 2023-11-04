/**
 * Created by Mb
 */

const express = require("express");
const router = express.Router();

const usersRoutes = require("./users.route");

const fixturesRoutes = require("./fixtures.route");
const mobileApiRoutes = require("./mobileApi.routes")
const adminRoutes = require("./Admin/admin.route")

//@route     auth
//@desc     inital route
//@access   Public
router.use("/auth", usersRoutes);
router.use("/fixture", fixturesRoutes);
router.use("/mobile", mobileApiRoutes)
router.use("/admin", adminRoutes)

module.exports = router;
