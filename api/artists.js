const api = require("./api");

/**
 * @param {string} id
 *@returns {Promise<{artist: Object, top: Object[]}>}
 *
 * */
const apigetArtistDetails = async (id) => {
  const _artist = api.get(`/artist/${id}`).then((a) => a.data);
  const _top = api.get(`/artist/${id}/top`).then((a) => a.data);


  return await Promise.all([_artist, _top]).then((responses) => {
    const artist = responses[0]
    const top = responses[1]
    return {
      artist,
      top,
    };
  });
};

module.exports = {
  apigetArtistDetails,
};
