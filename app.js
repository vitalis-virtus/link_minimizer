const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const api = require("./api");

require("dotenv").config();

const app = express();

app.use(cors());
app.use("/api/v1/auth", api.auth);
app.use("/api/v1/link", api.links);
app.use("/t", api.redirect);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "client", "build")));
  api.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const { PORT = 5000, DB_HOST } = process.env;

mongoose
  .connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("app has been started");
    });
  })
  .catch((error) => console.log(error));
