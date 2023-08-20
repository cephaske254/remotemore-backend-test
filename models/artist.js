class Artist {
  constructor(data) {
    return {
      id: data.id,
      name: data.name,
      image: data.picture_medium,
    };
  }

  static fromMany(data) {
    return data.map((artist) => new Artist(artist));
  }
}

class ArtistStats {
  constructor(data) {
    return {
      albums: data.nb_album,
      fans: data.nb_fan,
    };
  }
}

class ArtistDetail {
  constructor(data) {
    return {
      id: data.id,
      name: data.name,
      image: data.picture_medium,
      stats: new ArtistStats(data),

      image: data.picture_medium,
      image_hd: data.picture_xl,
    };
  }
}

module.exports = {
  Artist,
  ArtistDetail,
};
