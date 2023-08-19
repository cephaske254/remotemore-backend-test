const TracksService = require("../services/tracks");

const search = async (req, res) => {
  const query = req.query.q;

  const data = await TracksService.search(query)

  res.json(data);
};

const searchController = {
  search,
};

module.exports = searchController;
