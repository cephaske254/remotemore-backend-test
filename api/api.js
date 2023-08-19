const axios = require("axios");

const api = axios.create({
  baseURL: "https://api.deezer.com/",
  config: {},
});

module.exports = api;
