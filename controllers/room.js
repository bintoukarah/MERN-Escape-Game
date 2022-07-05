const postModel = require("../models/room");
const fs = require("fs");
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.readPost = (req, res) => {
    postModel.find((err, docs) => {
      if (!err) res.send(docs);
      else console.log("Error to get data : " + err);
    }).sort({ createdAt: -1 });
  };