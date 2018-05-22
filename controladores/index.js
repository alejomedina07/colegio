var express = require('express'),
  debug=require("debug")("CO:controlador:usuario"),
  ObjectId = require('mongoose').Types.ObjectId,
  router = express.Router();


router.get("/", function(req, res) {
  debug('hola semillerp');
  res.render("index");
});



module.exports = router;
