
const express = require("express");
const app = express();

// serve the static application when client connects
app.use(express.static(__dirname + "./../FrontEnd/dist/"));
app.get("/", (req, res) => {
  console.log(path)
  res.sendFile(path + "index.html");
});

// the server runs on this port
const serverPort = process.env.PORT || 3000;

app.listen(serverPort, () => {
  console.log("server running on port " + serverPort);
});
