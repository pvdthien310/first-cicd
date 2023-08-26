const http = require("http");
const express = require("express");

const app = express();

app.set("port", 3000);
const server = http.createServer(app);

app.get("/a", (request, response) => {
  response.json({ message: "Hé lô Vy mặp nhất thế giới" });
});

server.listen(3300, () => {
  console.log("Server is running in port 3000");
});
