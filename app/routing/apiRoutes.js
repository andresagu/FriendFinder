var friends = require("../data/friends.js")

// Dependencies
var express = require("express");
var path = require("path");
var apiRouter = express.Router();

// Sets up the Express app to handle data parsing
apiRouter.use(express.urlencoded({ extended: true }));
apiRouter.use(express.json());


// Routes
apiRouter.get("/api/friends", function(req, res) {

  console.log(req.body);

    console.log("get got");

    res.json(friends)
});

apiRouter.post("/api/friends", function(req, res) {

  console.log(req.body);
  newFriend = req.body;

  //PARSING THE SCORES SO THAT WE GET INT VALUES OR THE SCORES ARRAY
  newFriend.scores = newFriend.scores.map(elem => parseInt(elem))


  friends.push(newFriend)
  friends.forEach(function(elem){
    console.log(elem.scores);
    

  });

  res.json(newFriend)
});

module.exports = apiRouter;
