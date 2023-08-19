const api = require("./api");

const apiGetChart = () => api.get("/chart").then((res) => res.data);

module.exports = {
  apiGetChart,
};
