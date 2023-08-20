const ArtistsService = require("../services/artists");

const artistController = {};

artistController.details = async (req, res) => {
  try {
    const response = await ArtistsService.getArtistDetails(req.params.id);
    res.json(response);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

module.exports = artistController;
