const responseHelper = require("../../helpers/response.helper");
const Fixture = require('../../models/fixtures.model');
const FixtureH2H = require('../../models/fixturesh2h.model');
const FixtureLineup = require('../../models/fixturesLineup.model');
const FixtureTicker = require('../../models/fixturesTicker.model');
const FixtureFact = require('../../models/fixtureFacts.model')
var User = require("../../models/users.model");
const jwtHelper = require("../../helpers/jwt.helper");



//@route    POST auth/login
//@desc     login user
//@access   Public
//@params   {email}, {password}
var login = async (req, res) => {
    const { email, password } = req.body;
    try {
      if (email == "" || email == undefined) {
        let err = "email is required";
        return responseHelper.requestfailure(res, err);
      }
      if (password == "" || password == undefined) {
        let err = "Password is required";
        return responseHelper.requestfailure(res, err);
      }
  
      const exists = await User.findOne({ email: email });
      if (exists) {
        if(exists.role !== 'admin'){
            let err = "Only admins are allowed to access";
            return responseHelper.requestfailure(res, err);
        }
        const isMatch = await clientHelper.comparePassword(
          password,
          exists.password
        );
        if (isMatch) {
          const token = await jwtHelper.signAccessToken(exists);
          var message = "Successfully Singed In ";
          delete exists.password;
          var responseData = { token: "Bearer " + token, user: exists };
          return responseHelper.success(res, responseData, message);
        } else {
          let err = "Invalid Password";
          return responseHelper.requestfailure(res, err);
        }
      } else {
        let err = "User doesn't exists";
        return responseHelper.requestfailure(res, err);
      }
    } catch (error) {
      responseHelper.requestfailure(res, error);
    }
  };

var getAllUsers = async (req, res) => {
    try {
        var message = "success";
        const allUsers = await User.find({ role: 'user' });
        return responseHelper.success(res, allUsers, message);
    } catch (error) {
        responseHelper.requestfailure(res, error);        
    }
};





module.exports = {
    login,
    getAllUsers,
};