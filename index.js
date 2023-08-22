const http = require("http");
const express = require("express");

const app = express();

app.set("port", 3000);
const server = http.createServer(app);

app.get("/a", (request, response) => {
  response.json({ message: "Hey! This is your server response!" });
});

server.listen(3000, () => {
  console.log("Server is running in port 3000");
});
