const ArtistsService = require("../services/artists");

const artistController = {};

artistController.details = async (req, res) => {
  const response = await ArtistsService.getArtistDetails(req.params.id);
  if (response) res.json(response);
  else res.status(404).json({ error: e.message });
};

module.exports = artistController;
