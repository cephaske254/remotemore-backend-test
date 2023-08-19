const { apiSearchTracks } = require("../api/search");
const { Track } = require("../models/track");

class TracksService {
  /**
   * @param {string} query
   */
  static async search(query) {
    const data =await apiSearchTracks(query);

    return Track.fromMany(data)
  }
  async getTrack(id) {}
}

module.exports = TracksService;
