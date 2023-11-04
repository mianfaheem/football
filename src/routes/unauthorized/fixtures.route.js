const express = require("express");
const router = express.Router();
const fixturesController = require("../../controllers/fixtures.controller");

router.post("/get-fixture-by-date",fixturesController.getFixtureByDate)

router.post("/get-fixture-h2h",fixturesController.getFixturesh2h)

router.post("/get-fixture-lineup",fixturesController.getFixtureslineup)

router.post("/get-fixture-ticker",fixturesController.getFixturesTicker)

router.post("/get-fixture-facts",fixturesController.getFixturesFacts)


module.exports = router;