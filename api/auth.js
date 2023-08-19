// const oauthURL = "https://connect.deezer.com/oauth/access_token.php";
const oauthURL = "https://connect.deezer.com/oauth/access_token.php";
// https://connect.deezer.com/access_token.php";
const api = require("./api");

const params = {
  app_id: process.env.DEEZER_APP_ID,
  app_secret: process.env.DEEZER_APP_SECRET,
  redirect_uri: "http://blank.org",
  perms: "basic_access",
  response_type: "token",
};


const obtainAccessToken = () =>
  api.get(oauthURL, {}).then((response) => {
    return response.data;
  });

module.exports = {
  obtainAccessToken,
};
