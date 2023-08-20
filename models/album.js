class Album {
  constructor(data) {
    return {
      id: data.id,
      title: data.title,
      cover: data.cover_medium,
      stats: new AlbumStats(data),
      artist: new AlbumArtist(data.artist),
    };
  }

  static fromMany(data) {
    return data?.map((album) => new Album(album)) ?? [];
  }
}

class AlbumStats {
  constructor(data) {
    if (!data) return null;
    return {
      fans: data.fans,
      release_date: data.release_date,
    };
  }
}

class AlbumArtist {
  constructor(data) {
    if (!data) return null;
    return {
      id: data.id,
      name: data.name,
      picture: data.picture_medium,
    };
  }
}

module.exports = {
  Album,
};
