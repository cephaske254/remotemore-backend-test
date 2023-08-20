const { apigetArtistDetails } = require("../api/artists");
const { ArtistDetail } = require("../models/artist");
const { Track } = require("../models/track");

class ArtistsService {
  static async getArtistDetails(id) {
    const { top, artist } = await apigetArtistDetails(id);

    if (!artist?.id) {
      throw new Error("Artist not found");
    }

    return {
      top: {
        ...top,
        data: Track.fromMany(top.data),
      },
      artist: new ArtistDetail(artist),
    };
  }
}

module.exports = ArtistsService;
