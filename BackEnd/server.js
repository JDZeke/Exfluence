var express = require("express");
var serveStatic = require("serve-static");
const bodyParser = require("body-parser");

app = express();
app.use(serveStatic(__dirname + "/../FrontEnd/dist"));
var port = process.env.PORT || 3000;
app.listen(port);
app.use(bodyParser.json({ extended: true }));
