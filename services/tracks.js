const { apiGetChart } = require("../api/chart");
const { apiSearchTracks } = require("../api/search");
const { Album } = require("../models/album");
const { Track } = require("../models/track");

class TracksService {
  /**
   * @param {string} query
   */
  static async search(query) {
    const data = await apiSearchTracks(query);

    return Track.fromMany(data);
  }

  static async getTrack(id) {}

  static async getChart() {
    const data = await apiGetChart();

    return {
      tracks: {
        ...data.tracks,
        data: Track.fromMany(data.tracks.data),
      },
      albums: {
        ...data.albums,
        data: Album.fromMany(data.albums.data),
      },
    };
  }
}

module.exports = TracksService;
