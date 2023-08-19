const { apiGetChart } = require("../api/chart");
const { apiSearchTracks } = require("../api/search");
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
    };
  }
}

module.exports = TracksService;
