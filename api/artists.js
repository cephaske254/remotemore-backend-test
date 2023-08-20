const api = require("./api");

/**
 * @param {string} id
 *@returns {Promise<{artist: Object, albums: Object, tracks: Object}>}
 *
 * */
const apigetArtistDetails = async (id) => {
  const artist = api.get(`/artist/${id}`).then((a) => a.data);
  const tracks = api.get(`/artist/${id}/top`).then((a) => a.data);
  const albums = api.get(`/artist/${id}/albums`).then((a) => a.data);

  return await Promise.all([artist, tracks, albums]).then((responses) => {
    const artist = responses[0];
    const tracks = responses[1];
    const albums = responses[2];
    return {
      artist,
      tracks,
      albums,
    };
  });
};

module.exports = {
  apigetArtistDetails,
};
