var htmlRouter = require('./app/routing/htmlRoutes.js');
var apiRouter = require('./app/routing/apiRoutes.js');


// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
const PORT = process.env.PORT || 3000

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// ...

app.use(htmlRouter);
app.use(apiRouter);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
