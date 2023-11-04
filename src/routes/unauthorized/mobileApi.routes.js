const express = require("express");
const router = express.Router();
const mobileApiController = require("../../controllers/mobileApis.controller");


router.post("/get-all-fixture-by-date",mobileApiController.getAllFixtureByDate)

router.post("/get-all-fixture-h2h",mobileApiController.getFixturesh2h)

router.post("/get-all-fixture-lineup",mobileApiController.getFixtureslineup)

router.post("/get-all-fixture-ticker",mobileApiController.getFixturesTicker)

router.post("/get-all-fixture-facts",mobileApiController.getFixturesFacts)


module.exports = router;