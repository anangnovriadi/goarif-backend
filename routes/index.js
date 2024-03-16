const express = require("express");
const router = express.Router();
const { test } = require("../controllers/testController");

module.exports = app => {
  router.get("/check-health", (req, res) => {
    res.status(200).send("OK");
  });

  router.get("/test", test);

  app.use("/api", router);
};
