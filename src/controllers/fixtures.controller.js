const axios = require("axios");
const responseHelper = require("../helpers/response.helper");
const Fixture = require('../models/fixtures.model');
const FixtureH2H = require('../models/fixturesh2h.model');
const FixtureLineup = require('../models/fixturesLineup.model');
const FixtureTicker = require('../models/fixturesTicker.model');
const FixtureFact = require('../models/fixtureFacts.model')


var getFixtureByDate = async(req,res) => {
    const { date } = req.body;
    try {
        if (date == "" || date == undefined) {
            let err = "date is required";
            return responseHelper.requestfailure(res, err);
        }        
        const options = {
            method: 'GET',
            url: 'https://api-football-beta.p.rapidapi.com/fixtures',
            params: { date: date },
            headers: {
              'X-RapidAPI-Key': 'de51b671e2msh1a515d7a7d5bafbp182a8ejsn25a4de8bbd51',
              'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
            }
          };
          axios.request(options).then(async function (response) {
            let newFixture = {
                date: date,
                fixtureType: 'all',
                alldata: response.data.response
            };
            await Fixture.updateOne({ date: date },newFixture, { upsert : true });
            return responseHelper.success(res, response.data, 'success');
          }).catch(function (error) {
              console.error(error);
          });
    } catch (error) {
        responseHelper.requestfailure(res, error);
    }
};

var getFixturesh2h = async(req,res) => {
    const { h2h } = req.body;
    try {
        if (h2h == "" || h2h == undefined) {
            let err = "h2h is required";
            return responseHelper.requestfailure(res, err);
        }      
        const options = {
            method: 'GET',
            url: 'https://api-football-beta.p.rapidapi.com/fixtures/headtohead',
            params: { h2h: h2h },
            headers: {
              'X-RapidAPI-Key': 'de51b671e2msh1a515d7a7d5bafbp182a8ejsn25a4de8bbd51',
              'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
            }
          };
          axios.request(options).then(async function (response) {
            let newFixture = {
                h2h: h2h,
                alldata: response.data.response
            };
            await FixtureH2H.updateOne({ h2h: h2h },newFixture, { upsert : true });
              return responseHelper.success(res, response.data, 'success');
          }).catch(function (error) {
              console.error(error);
          });
    } catch (error) {
        responseHelper.requestfailure(res, error);
    }
};

var getFixtureslineup = async(req,res) => {
    const { fixtureId } = req.body;
    try {
        if (fixtureId == "" || fixtureId == undefined) {
            let err = "fixtureId is required";
            return responseHelper.requestfailure(res, err);
        }
        const options = {
            method: 'GET',
            url: 'https://api-football-beta.p.rapidapi.com/fixtures/lineups',
            params: { fixture: fixtureId },
            headers: {
              'X-RapidAPI-Key': 'de51b671e2msh1a515d7a7d5bafbp182a8ejsn25a4de8bbd51',
              'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
            }
          };
          axios.request(options).then(async function (response) {
            let newFixture = {
                fixtureId: fixtureId,                
                alldata: response.data.response
            };
            await FixtureLineup.updateOne({ fixtureId: fixtureId },newFixture, { upsert : true });
            return responseHelper.success(res, response.data, 'success');
          }).catch(function (error) {
              console.error(error);
          });
    } catch (error) {
        responseHelper.requestfailure(res, error);
    }
};

var getFixturesTicker = async(req,res) => {
    const { fixtureId } = req.body;
    try {
        if (fixtureId == "" || fixtureId == undefined) {
            let err = "fixtureId is required";
            return responseHelper.requestfailure(res, err);
        }
        const options = {
            method: 'GET',
            url: 'https://api-football-beta.p.rapidapi.com/fixtures/events',
            params: { fixture: fixtureId },
            headers: {
              'X-RapidAPI-Key': 'de51b671e2msh1a515d7a7d5bafbp182a8ejsn25a4de8bbd51',
              'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
            }
          };
          axios.request(options).then(async function (response) {
            let newFixture = {
                fixtureId: fixtureId,                
                alldata: response.data.response
            };
            await FixtureTicker.updateOne({ fixtureId: fixtureId },newFixture, { upsert : true });
            return responseHelper.success(res, response.data, 'success');
          }).catch(function (error) {
              console.error(error);
          });
    } catch (error) {
        responseHelper.requestfailure(res, error);
    }
};

var getFixturesFacts = async(req,res) => {
    const { fixtureId } = req.body;
    try {
        if (fixtureId == "" || fixtureId == undefined) {
            let err = "fixtureId is required";
            return responseHelper.requestfailure(res, err);
        }
        const options = {
            method: 'GET',
            url: 'https://api-football-beta.p.rapidapi.com/fixtures/statistics',
            params: { fixture: fixtureId },
            headers: {
              'X-RapidAPI-Key': 'de51b671e2msh1a515d7a7d5bafbp182a8ejsn25a4de8bbd51',
              'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
            }
          };
          axios.request(options).then(async function (response) {
            let newFixture = {
                fixtureId: fixtureId,                
                alldata: response.data.response
            };
            await FixtureFact.updateOne({ fixtureId: fixtureId },newFixture, { upsert : true });
            return responseHelper.success(res, response.data, 'success');
          }).catch(function (error) {
              console.error(error);
          });
    } catch (error) {
        responseHelper.requestfailure(res, error);
    }
};



module.exports = {
    getFixtureByDate,
    getFixturesh2h,
    getFixtureslineup,
    getFixturesTicker,
    getFixturesFacts,
};