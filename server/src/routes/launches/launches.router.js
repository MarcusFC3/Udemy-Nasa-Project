const express = require("express");
const {httpgetAllLaunches} = require("./launches.controller");

const launchesRouter = express.Router();

launchesRouter.get("/", httpgetAllLaunches)

module.exports = launchesRouter;