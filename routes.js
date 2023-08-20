/**
 * @module routes
 * @description Routes for express app
 * App routes for the express app are defined here.
 */
const express = require("express");

const router = express.Router();

/**
 * Controller modules
 */
const tracksController = require("./controllers/tracks");
const { getChart } = require("./controllers/charts");
const artistController = require("./controllers/artist");

router.get("/tracks/search/", tracksController.search);
router.get("/charts/", getChart);

router.get("/artists/:id/", artistController.details);

// export
module.exports = router;
