const api = require("./api");

/**
 * @param {string} query
 * @returns {Promise<{
 *
 * }>}
 */
const apiSearchTracks = (query) =>
  api
    .get("/search/track", {
      params: {
        q: query,
      },
    })
    .then((response) => response.data.data);

module.exports = {
  apiSearchTracks,
};
