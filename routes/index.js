var express = require('express');
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;
var usersDAO = require("../src/models/dao/usersDAO");

const uri =
  "mongodb+srv://mellsudario:12345@cluster0.0kfxxhh.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

/* GET home page. */
router.get('/',async function(req, res, next) {
  // consultar o BD p obeter os albuns
  const albuns = await usersDAO.getAlbuns(client) // 
  console.log(albuns)
  res.render('index', { albuns: albuns});
});

module.exports = router;
