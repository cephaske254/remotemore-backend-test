const { Artist } = require("./artist");
const { Album } = require("./album");

class Track {
  constructor(data) {
    return {
      id: data.id,
      title: data.title,
      title_short: data.title_short ?? data.title,
      preview: data.preview,
      artist: new Artist(data.artist),
      album: new Album(data.album),
      stats: new TrackStats(data),
    };
  }

  static fromMany(data) {
    return data?.map((track) => new Track(track)) ?? [];
  }
}

class TrackStats {
  constructor(data) {
    return {
      duration: data.duration,
      rank: data.rank,
    };
  }
}

module.exports = {
  Track,
};
