const TracksService = require("../services/tracks");

const getChart = async (_, res) => {
  const data = await TracksService.getChart();

  res.json(data);
};

module.exports = {
  getChart,
};
