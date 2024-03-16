"use-strict";

const models = require("../models");

class TestController {
  static async test(req, res) {
    try {
      const data = await models.test.findAll({});

      let response = {
        message: "success",
        data: data
      };

      return req.output(req, res, response, "info", 200);
    } catch (err) {
      throw err;
    }
  }
}

module.exports = TestController;
