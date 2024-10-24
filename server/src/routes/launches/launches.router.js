const express = require("express");

launchesRouter = express.Router();

launchesRouter.get("/launches", getALlLaunches)

module.exports = {
    launchesRouter
}