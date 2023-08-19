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

module.exports = {
  Artist,
};
