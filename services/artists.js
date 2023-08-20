const { apigetArtistDetails } = require("../api/artists");
const { Album } = require("../models/album");
const { ArtistDetail } = require("../models/artist");
const { Track } = require("../models/track");

class ArtistsService {
  static async getArtistDetails(id) {
    const { albums, artist, tracks } = await apigetArtistDetails(id);

    if (!artist?.id) {
      return null;
    }

    return {
      tracks: {
        ...tracks,
        data: Track.fromMany(tracks.data),
      },
      artist: new ArtistDetail(artist),
      albums: {
        ...albums,
        data: Album.fromMany(albums.data),
      },
    };
  }
}

module.exports = ArtistsService;
