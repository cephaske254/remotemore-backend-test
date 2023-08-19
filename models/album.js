class Album {
  constructor(data) {
    return {
      id: data.id,
      title: data.title,
      cover: data.cover_medium,
      duration: data.duration,
    };
  }
}



module.exports = {
  Album,
};
