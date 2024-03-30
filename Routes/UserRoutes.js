const express = require("express");
const {
  registerLecture,
  sendMessage,
  getMessage,
  login
} = require("../controller/Engine");
const route = express.Router();

route.get("/incommingMessage", getMessage);
route.post("/register", registerLecture);
route.post("/login", login);
route.post("/sendMessage", sendMessage);

module.exports = { route };