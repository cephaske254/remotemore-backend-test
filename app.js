
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const routes = require("./routes");


const { obtainAccessToken } = require("./api/auth");

// middlewares
app.use(express.static("public"));
app.use(cors())


app.use("/", routes);

const port = Number(process.env.PORT ?? 5000);
app.listen(port, () => {
  console.log("Server is running on port", port);
  obtainAccessToken();
});
