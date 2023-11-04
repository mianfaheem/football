const axios = require("axios");
const responseHelper = require("../helpers/response.helper");
const Fixture = require('../models/fixtures.model');
const FixtureH2H = require('../models/fixturesh2h.model');
const FixtureLineup = require('../models/fixturesLineup.model');
const FixtureTicker = require('../models/fixturesTicker.model');
const FixtureFact = require('../models/fixtureFacts.model')


var getAllFixtureByDate = async (req, res)=>{
    const { date } = req.body;
    try {
        if (date == "" || date == undefined) {
            let err = "date is required";
            return responseHelper.requestfailure(res, err);
        } 
        const allFixtures = await Fixture.findOne({ date: date }).lean();
        return responseHelper.success(res, allFixtures, 'success');
    } catch (error) {
        responseHelper.requestfailure(res, error);
    }
};

var getFixturesh2h = async (req, res)=>{
    const { h2h } = req.body;
    try {
        if (h2h == "" || h2h == undefined) {
            let err = "h2h is required";
            return responseHelper.requestfailure(res, err);
        } 
        const allFixtures = await FixtureH2H.findOne({ h2h: h2h }).lean();
        return responseHelper.success(res, allFixtures, 'success');
    } catch (error) {
        responseHelper.requestfailure(res, error);
    }
};

var getFixtureslineup = async (req, res)=>{
    const { fixtureId } = req.body;
    try {
        if (fixtureId == "" || fixtureId == undefined) {
            let err = "fixtureId is required";
            return responseHelper.requestfailure(res, err);
        } 
        const allFixtures = await FixtureLineup.findOne({ fixtureId: fixtureId }).lean();
        return responseHelper.success(res, allFixtures, 'success');
    } catch (error) {
        responseHelper.requestfailure(res, error);
    }
};

var getFixturesTicker = async (req, res)=>{
    const { fixtureId } = req.body;
    try {
        if (fixtureId == "" || fixtureId == undefined) {
            let err = "fixtureId is required";
            return responseHelper.requestfailure(res, err);
        } 
        const allFixtures = await FixtureTicker.findOne({ fixtureId: fixtureId }).lean();
        return responseHelper.success(res, allFixtures, 'success');
    } catch (error) {
        responseHelper.requestfailure(res, error);
    }
};

var getFixturesFacts = async (req, res)=>{
    const { fixtureId } = req.body;
    try {
        if (fixtureId == "" || fixtureId == undefined) {
            let err = "fixtureId is required";
            return responseHelper.requestfailure(res, err);
        } 
        const allFixtures = await FixtureFact.findOne({ fixtureId: fixtureId }).lean();
        return responseHelper.success(res, allFixtures, 'success');
    } catch (error) {
        responseHelper.requestfailure(res, error);
    }
};



module.exports = {
    getAllFixtureByDate,
    getFixturesh2h,
    getFixtureslineup,
    getFixturesTicker,
    getFixturesFacts,
};